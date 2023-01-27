import BASE_URL from '../utils/baseUrl';

const productAPI = {
  async registerProduct(reqData, token) {
    const response = await fetch(`${BASE_URL}/product`, {
      method: 'POST',

      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify(reqData),
    });
    const data = await response.json();
    return data;
  },
  async loadProductFeed(token, pageAccount) {
    const response = await fetch(`${BASE_URL}/product/${pageAccount}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  },
  async getOriginalProductInfo(token, productid) {
    const response = await fetch(
      `https://mandarin.api.weniv.co.kr/product/detail/${productid}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      },
    );
    const data = await response.json();
    return data;
  },
  async reviseProductInfo(token, productid, updateData) {
    const response = await fetch(
      `https://mandarin.api.weniv.co.kr/product/${productid}`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
        body: JSON.stringify(updateData),
      },
    );
    const data = await response.json();
    return data;
  },
  async deleteProduct(token, productId) {
    const response = await fetch(
      `https://mandarin.api.weniv.co.kr/product/${productId}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      },
    );
    const data = await response.json();
    return data;
  },
};

export default productAPI;
