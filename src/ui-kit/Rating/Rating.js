import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { random } from '../../utils/helpers';
import { Star } from './Star';

import './styles/Rating.scss';

const Rating = ({ rating, heightRating, className }) => {
  const starts = Array.from(new Array(heightRating), () => (
    <Star key={random()} pracentage={heightRating / rating} />
  ));
  return (
    <div className={classNames('rating', className)}>
      <div className="rating__stars-wrapper">{starts}</div>
      <span className="rating__count">{rating.toFixed(1)}</span>
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number,
  heightRating: PropTypes.number,
};

Rating.defaultProps = {
  rating: 5,
  heightRating: 5,
};

export default React.memo(Rating);
