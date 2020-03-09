import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './styles/BuyBtn.scss';

export const BuyBtn = ({ className, children, ...props }) => (
  <button className={classNames('buy-btn', className)} {...props}>
    <img src="/images/cart.svg" alt="Buy" />
    {children}
  </button>
);

BuyBtn.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

BuyBtn.defaultProps = {
  className: '',
  children: 'Купить',
};
