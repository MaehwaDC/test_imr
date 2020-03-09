import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

import Spinner from '../../ui-kit/Spinner';

import './index.scss';

class InfiniteScroll extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      page: props.startPage,
      isLoading: false,
    };
    this.currentOffset = 0;
  }

  componentDidUpdate(prevProps) {
    const { children, hasMore } = this.props;
    const { isLoading } = this.state;
    if (
      isLoading &&
      (children.length !== prevProps.children.length || !hasMore)
    ) {
      this.setState({ isLoading: false });
    }
  }

  onScrollHandler = e => {
    const { offset, hasMore } = this.props;
    const { scrollLeft, offsetWidth, scrollWidth } = e.target;
    const { isLoading } = this.state;

    const scrollOffset = scrollWidth - offsetWidth - scrollLeft;

    if (
      offset > scrollWidth - offsetWidth - scrollLeft &&
      scrollOffset < this.currentOffset &&
      !isLoading &&
      hasMore
    ) {
      this.setState(
        prevState => ({ page: prevState.page + 1, isLoading: true }),
        this.loadMore,
      );
    }

    this.currentOffset = scrollOffset;
  };

  loadMore = debounce(() => {
    const { onLoad } = this.props;
    const { page } = this.state;
    onLoad(page);
  }, 300);

  render() {
    const { children, hasMore } = this.props;
    const { isLoading } = this.state;
    return (
      <div className="infinity-scroll" onScroll={this.onScrollHandler}>
        <div className="infinity-scroll__scroll">
          {children}
          {isLoading && hasMore && (
            <Spinner className="infinity-scroll__spinner" />
          )}
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
