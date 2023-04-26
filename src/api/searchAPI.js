import { instance } from '../axios/axios';

const searchAPI = {
  async searchUser(keyword) {
    const response = await instance.get(`/user/searchuser/?keyword=${keyword}`);
    return response.data;
  },
};

export default searchAPI;
