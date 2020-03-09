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
      priceWithDiscount,
      color,
      size,
      material,
      mech,
      saler,
      className,
      rating,
    } = this.props;
    return (
      <div className={classNames('product-card', className)}>
        {imgUrl && (
          <div className="product-card__image-wrapper">
            <img src={imgUrl} alt="product" />
          </div>
        )}
        <span className="product-card__name">{name}</span>
        <Rating
          className="product-card__section"
          rating={rating}
          maxRating={5}
        />
        <div className="product-card__section product-card__price">
          {!priceWithDiscount ? (
            price
          ) : (
            <>
              <span className="product-card__price_red">
                {priceWithDiscount}
              </span>
              <span className="product-card__price_old-price">{price}</span>
            </>
          )}
        </div>
        <div className="product-card__section">{color}</div>
        <div className="product-card__section">{material}</div>
        <div className="product-card__section">{size}</div>
        <div className="product-card__section">{mech}</div>
        <div className="product-card__section">
          <a href={saler.refUrl}>{saler.name}</a>
        </div>
        <div className="product-card__btns-wrapper">
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
  priceWithDiscount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
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
  saler: {},
};

export default ProductCard;
