import React, { PureComponent } from 'react';

import InfiniteScroll from '../InfiniteScroll';
import ProductCard from '../ProductCard';
import TitleColumn from '../ProductCard/TitleColumn';

import './index.scss';

class ProductsHorizontalViewer extends PureComponent {
  rendreCard = data => <ProductCard key={data.id} {...data} />;

  titles = [
    'Рейтинг',
    'Цена',
    'Цвет',
    'Материал',
    'Размеры',
    'Механизм',
    'Продавец',
  ];
  render() {
    const { data } = this.props;
    return (
      <div className="products-horizontal-viewer">
        <TitleColumn
          titles={this.titles}
          className="products-horizontal-viewer__title"
        />
        <InfiniteScroll>{data.map(this.rendreCard)}</InfiniteScroll>
      </div>
    );
  }
}

export default ProductsHorizontalViewer;
