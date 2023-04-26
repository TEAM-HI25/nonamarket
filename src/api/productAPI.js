import { instance } from '../axios/axios';

const productAPI = {
  async registerProduct(reqData) {
    const response = await instance.post(`/product`, reqData);
    return response.data;
  },
  async loadProductFeed(pageAccount) {
    const response = await instance.get(`/product/${pageAccount}`);
    return response.data;
  },
  async getOriginalProductInfo(productid) {
    const response = await instance.get(`/product/detail/${productid}`);
    return response.data;
  },
  async reviseProductInfo(productid, updateData) {
    const response = await instance.put(`/product/${productid}`, updateData);
    return response.data;
  },
  async deleteProduct(productId) {
    const response = await instance.delete(`/product/${productId}`);
    return response.data;
  },
};

export default productAPI;
