import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Spinner from '../../ui-kit/Spinner';

import './index.scss';

class InfiniteScroll extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      page: props.startPage,
      isLoading: false,
    };
    this.prevOffset = props.offset;
    this.scrollRef = React.createRef();

    this.shadowLeft = React.createRef();

    this.shadowRight = React.createRef();
  }

  componentDidMount() {
    const { current } = this.scrollRef;

    current.addEventListener('wheel', this.onWheelHandler);
  }

  componentDidUpdate(prevProps) {
    const { children, hasMore } = this.props;
    const { isLoading } = this.state;
    if (
      isLoading &&
      Array.isArray(children) &&
      (children.flat().length !== prevProps.children.flat().length || !hasMore)
    ) {
      this.setState({ isLoading: false });
    }
  }

  /**
   * scroll event handler
   */
  onScrollHandler = e => {
    const { offset, hasMore } = this.props;
    const { scrollLeft, offsetWidth, scrollWidth } = e.target;
    const { isLoading } = this.state;

    // scroll right side offset
    const scrollOffset = scrollWidth - offsetWidth - scrollLeft;

    this.shadowUpdate(e);

    if (
      // check scroll position in props offset value relative right side
      scrollOffset < offset &&
      // handle only right scrolling
      scrollOffset < this.prevOffset &&
      !isLoading &&
      hasMore
    ) {
      this.setState(
        // set loading true and increase page by 1
        prevState => ({ page: prevState.page + 1, isLoading: true }),
        this.loadMore,
      );
    }

    this.prevOffset = scrollOffset;
  };

  shadowUpdate = e => {
    const { hasMore } = this.props;
    const { scrollLeft, scrollWidth, clientWidth } = e.target;
    const { current } = this.shadowRight;

    if (!hasMore) {
      const leftScrollRight = scrollWidth - clientWidth;
      const shadowRightOpacity =
        (1 / 20) *
        (leftScrollRight - Math.max(scrollLeft, leftScrollRight - 20));

      current.style.opacity = shadowRightOpacity;
    }
  };

  onWheelHandler = e => {
    const { current } = this.scrollRef;
    const { scrollLeft, offsetWidth, scrollWidth } = current;
    const scrollOffset = scrollWidth - offsetWidth;

    e.preventDefault();

    if (scrollLeft <= scrollOffset && scrollLeft >= 0) {
      current.scrollLeft += e.deltaY;
    }
  };

  /**
   * loade more handele func
   */
  loadMore = () => {
    const { onLoad } = this.props;
    const { page } = this.state;
    onLoad(page);
  };

  render() {
    const { children, hasMore, className } = this.props;
    const { isLoading } = this.state;
    return (
      <div
        className={classNames('infinity-scroll', className)}
        onScroll={this.onScrollHandler}
        ref={this.scrollRef}
      >
        <div className="infinity-scroll__content">
          {children}
          {isLoading && hasMore && (
            <Spinner className="infinity-scroll__spinner" />
          )}
          <div
            className="infinity-scroll__shadow infinity-scroll__shadow_right"
            ref={this.shadowRight}
          />
        </div>
      </div>
    );
  }
}

InfiniteScroll.propTypes = {
  onLoad: PropTypes.func,
  hasMore: PropTypes.bool,
  pageStart: PropTypes.number,
  offset: PropTypes.number,
};

InfiniteScroll.defaultProps = {
  onLoad() {},
  hasMore: true,
  pageStart: 0,
  offset: 100,
};

export default InfiniteScroll;
