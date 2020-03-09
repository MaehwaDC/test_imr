import { TEST_PRODUCTS_DATA } from '../Data';

class Api {
  fetchData = (page, pageSize) =>
    new Promise(resolve => {
      setTimeout(() => {
        const startIndex = (page - 1) * pageSize;
        const data = TEST_PRODUCTS_DATA.slice(
          startIndex,
          startIndex + pageSize,
        );

        resolve({
          data,
          totalCount: TEST_PRODUCTS_DATA.length,
        });
      }, 100);
    });
}

export default new Api();
