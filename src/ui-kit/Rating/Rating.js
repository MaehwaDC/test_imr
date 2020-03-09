import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { random } from '../../utils/helpers';
import { Star } from './Star';

import './styles/Rating.scss';

const Rating = ({ rating, maxRating, className }) => {
  const starts = Array.from(new Array(maxRating), (_, index) => {
    let currentPercentage = 1;
    const ratingInt = Math.trunc(rating);
    if (ratingInt === index && rating > ratingInt) {
      currentPercentage = rating - ratingInt;
    } else if (index + 1 > ratingInt) {
      currentPercentage = 0;
    }

    return <Star key={random()} percentage={currentPercentage} />;
  });
  return (
    <div className={classNames('rating', className)}>
      <div className="rating__stars-wrapper" style={{ width: maxRating * 17 }}>
        {starts}
      </div>
      <span className="rating__count">{rating.toFixed(1)}</span>
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number,
  maxRating: PropTypes.number,
};

Rating.defaultProps = {
  rating: 5,
  maxRating: 5,
};

export default React.memo(Rating);
