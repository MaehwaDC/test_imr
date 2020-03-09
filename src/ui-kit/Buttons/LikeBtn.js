import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import './styles/LikeBtn.scss';

export const LikeBtn = ({ className, ...props }) => (
  <button className={classNames('like-btn', className)} {...props}>
    <img src="/images/like.svg" alt="Like" />
  </button>
);

LikeBtn.propTypes = {
  className: PropTypes.string,
};
