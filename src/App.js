import React, { PureComponent } from 'react';

import { TEST_PRODUCTS_DATA } from './Data';

import ProductsHorizontalViewer from './components/ProductsHorizontalViewer';
import PageLayout from './components/Layout';

import './styles/templates.scss';

class App extends PureComponent {
  render() {
    return (
      <main>
        <PageLayout>
          <ProductsHorizontalViewer data={TEST_PRODUCTS_DATA} />
        </PageLayout>
      </main>
    );
  }
}

export default App;
