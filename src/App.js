import React, { PureComponent } from 'react';

import ProductsHorizontalViewer from './components/ProductsHorizontalViewer';
import PageLayout from './components/Layout';

import './styles/templates.scss';

class App extends PureComponent {
  render() {
    return (
      <main>
        <PageLayout>
          <ProductsHorizontalViewer />
        </PageLayout>
      </main>
    );
  }
}

export default App;
