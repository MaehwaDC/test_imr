import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles/Star.scss';

export const Star = ({ percentage, className }) => (
  <svg
    className={classNames('star', className)}
    width={17 * percentage}
    height="15"
    viewBox={`0 0 ${17 * percentage} 15`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#FFBC00"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.26852 12.4377L3.40841 15L4.33661 9.57295L0.40469 5.72949L5.83847 4.93769L8.26852 0L10.6986 4.93769L16.1324 5.72949L12.2004 9.57295L13.1286 15L8.26852 12.4377Z"
    />
  </svg>
);

Star.propTypes = {
  percentage: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
};

Star.defaultProps = {
  pracentage: 1,
  className: '',
};
