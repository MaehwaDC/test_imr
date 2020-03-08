import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { BuyBtn, LikeBtn } from '../../ui-kit/Buttons';
import Rating from '../../ui-kit/Rating';

import './index.scss';

class ProductCard extends PureComponent {
  render() {
    const {
      name,
      imgUrl,
      price,
      sale,
      color,
      size,
      material,
      mech,
      slaer,
      className,
    } = this.props;
    return (
      <div className={classNames('product-card', className)}>
        {imgUrl && (
          <div className="product-card__image-wrapper">
            <img src={imgUrl} alt="product" />
          </div>
        )}
        <span className="product-card__name">{name}</span>
        <Rating className="product-card__section" />
        <div className="product-card__section product-card__price">
          {sale || price}
          {sale && <span>{price}</span>}
        </div>
        <div className="product-card__section">{color}</div>
        <div className="product-card__section">{material}</div>
        <div className="product-card__section">{size}</div>
        <div className="product-card__section">{mech}</div>
        <a href={slaer.refUrl} className="product-card__section">
          {slaer.name}
        </a>
        <div>
          <LikeBtn />
          <BuyBtn />
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  name: PropTypes.string,
  imgUrl: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  sale: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.string,
  material: PropTypes.string,
  size: PropTypes.string,
  mech: PropTypes.string,
  saler: PropTypes.shape({
    name: PropTypes.string,
    refUrl: PropTypes.string,
  }),
};

ProductCard.defaultProps = {
  name: '',
  imageUrl: '',
  slaer: {},
};

export default ProductCard;
