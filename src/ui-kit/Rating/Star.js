import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Star = ({ percentage, className }) => {
  return <div className={classNames('star', className)}>{percentage}</div>;
};

Star.propTypes = {
  percentage: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
};

Star.defaultProps = {
  pracentage: 1,
  className: '',
};
