import { instance } from '../axios/axios';

const likeAPI = {
  async getHeart(postId) {
    const response = await instance.post(`/post/${postId}/heart`);
    return response.data;
  },

  async cancelHeart(postId) {
    const response = await instance.delete(`/post/${postId}/unheart`);
    return response.data;
  },
};

export default likeAPI;
