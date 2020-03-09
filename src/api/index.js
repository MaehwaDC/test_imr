import { TEST_PRODUCTS_DATA } from '../Data';

class Api {
  async fetchData(page, pageSize) {
    const startIndex = (page - 1) * pageSize;
    const resData = TEST_PRODUCTS_DATA.slice(startIndex, startIndex + pageSize);

    const data = await Promise.resolve(resData, res => {
      setTimeout(() => {}, 1000);

      return res;
    });

    return {
      data,
      totalCount: TEST_PRODUCTS_DATA.length,
    };
  }
}

export default new Api();
