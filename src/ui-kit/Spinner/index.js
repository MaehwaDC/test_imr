import React from 'react';
import classNames from 'classnames';

import './index.scss';

const Spinner = ({ className, ...props }) => (
  <svg
    className={classNames('spinner', className)}
    viewBox="0 0 50 50"
    {...props}
  >
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="3"
    />
  </svg>
);

export default Spinner;
