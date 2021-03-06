import React, { PureComponent } from 'react';

import InfiniteScroll from '../InfiniteScroll';
import ProductCard from '../ProductCard';
import TitleColumn from '../ProductCard/TitleColumn';
import Api from '../../api';

import './index.scss';

class ProductsHorizontalViewer extends PureComponent {
  state = {
    data: [],
    totalCount: 0,
  };

  /**
   * Render func for prod card
   */
  rendreCard = data => <ProductCard key={data.id} {...data} />;

  componentDidMount() {
    this.loadMore(1);
  }

  loadMore = async page => {
    const { data, totalCount } = await Api.fetchData(page, 5);
    this.setState(prevState => ({
      data: [...prevState.data, ...data],
      totalCount,
    }));
  };

  /**
   * titles array for title column
   */
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
    const { data, totalCount } = this.state;
    const hasMore = data.length < totalCount;

    return (
      <div className="products-horizontal-viewer">
        <InfiniteScroll
          className="products-horizontal-viewer__scroll"
          startPage={1}
          hasMore={hasMore}
          onLoad={this.loadMore}
        >
          <TitleColumn
            titles={this.titles}
            className="products-horizontal-viewer__title"
          />
          {data.map(this.rendreCard)}
        </InfiniteScroll>
      </div>
    );
  }
}

export default ProductsHorizontalViewer;
