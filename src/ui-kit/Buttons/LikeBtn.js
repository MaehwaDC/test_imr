import React from 'react';
import classNames from 'classnames';

import './styles/LikeBtn.scss';

export const LikeBtn = ({ className, ...props }) => (
  <button className={classNames('like-btn', className)} {...props}>
    <img src="/images/like.svg" alt="Like" />
  </button>
);
