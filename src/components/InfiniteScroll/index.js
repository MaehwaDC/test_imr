import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash/throttle';

import './index.scss';

class InfiniteScroll extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      page: props.page,
    };
  }

  onScrollHandler = e => {
    const { offset, hasMore } = this.props;
    const { scrollLeft, offsetWidth, scrollWidth } = e.target;

    if (offset === scrollWidth - offsetWidth - scrollLeft && hasMore) {
      this.loadMore();
    }
  };

  loadMore = throttle(() => {
    const { onLoad } = this.props;
    const { page } = this.state;
    console.log('123', 123);
    onLoad(page);
  }, 100);

  render() {
    const { children } = this.props;
    return (
      <div className="infinity-scroll" onScroll={this.onScrollHandler}>
        <div className="infinity-scroll__scroll">{children}</div>
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
