import { instance } from '../axios/axios';

const followAPI = {
  async followingPost(pageAccount) {
    const response = await instance.post(`/profile/${pageAccount}/follow`);
    return response.data;
  },

  async unfollowingPost(pageAccount) {
    const response = await instance.delete(`/profile/${pageAccount}/unfollow`);
    return response.data;
  },
};

export default followAPI;
