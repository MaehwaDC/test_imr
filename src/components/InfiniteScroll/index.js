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
    };
    this.currentOffset = 0;
  }

  onScrollHandler = e => {
    const { offset, isLoading, hasMore } = this.props;
    const { scrollLeft, offsetWidth, scrollWidth } = e.target;

    const scrollOffset = scrollWidth - offsetWidth - scrollLeft;

    if (
      offset > scrollWidth - offsetWidth - scrollLeft &&
      scrollOffset < this.currentOffset &&
      !isLoading &&
      hasMore
    ) {
      this.loadMore();
    }

    this.currentOffset = scrollOffset;
  };

  loadMore = debounce(() => {
    const { onLoad } = this.props;

    this.setState(
      prevState => ({ page: prevState.page + 1 }),
      () => {
        const { page } = this.state;
        onLoad(page);
      },
    );
  }, 300);

  render() {
    const { children, isLoading } = this.props;
    console.log('isLoading', isLoading);
    return (
      <div className="infinity-scroll" onScroll={this.onScrollHandler}>
        <div className="infinity-scroll__scroll">
          {children}
          {isLoading && <Spinner />}
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
