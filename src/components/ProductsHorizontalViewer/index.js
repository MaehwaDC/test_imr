import React, { PureComponent } from 'react';

import InfiniteScroll from '../InfiniteScroll';
import ProductCard from '../ProductCard';
import TitleColumn from '../ProductCard/TitleColumn';
import Api from '../../api';

import './index.scss';

class ProductsHorizontalViewer extends PureComponent {
  state = {
    data: [],
  };

  rendreCard = data => <ProductCard key={data.id} {...data} />;

  componentDidMount() {
    this.loadMore(1);
  }

  loadMore = async page => {
    const data = await Api.fetchData(page, 5);
    this.setState(prevState => ({
      data: [...prevState.data, ...data],
    }));
  };

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
    const { data } = this.state;
    return (
      <div className="products-horizontal-viewer">
        <TitleColumn
          titles={this.titles}
          className="products-horizontal-viewer__title"
        />
        <InfiniteScroll startPage={1} onLoad={this.loadMore}>
          {data.map(this.rendreCard)}
        </InfiniteScroll>
      </div>
    );
  }
}

export default ProductsHorizontalViewer;
