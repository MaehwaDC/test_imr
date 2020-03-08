import React, { PureComponent } from 'react';

import './index.scss';

class InfinityScroll extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div className="infinity-scroll">
        <div className="infinity-scroll__scroll">{children}</div>
      </div>
    );
  }
}

export default InfinityScroll;
