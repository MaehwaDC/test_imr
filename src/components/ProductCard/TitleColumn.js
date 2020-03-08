import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { random } from '../../utils/helpers';

class TitleColumn extends PureComponent {
  renderTitle = title => (
    <div key={random} className="product-card__section">
      {title}
    </div>
  );
  render() {
    const { titles, className } = this.props;
    return (
      <div
        className={classNames(
          'product-card',
          'product-card_theme_title',
          className,
        )}
      >
        {titles.map(this.renderTitle)}
      </div>
    );
  }
}

TitleColumn.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.string),
};

TitleColumn.defaultProps = {
  titles: [],
};

export default TitleColumn;
