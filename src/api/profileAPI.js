// import axios from 'axios';
import { instance } from '../axios/axios';
import BASE_URL from '../utils/baseUrl';

const profileAPI = {
  // UserProfile 데이터
  async getUserInfo(accountname) {
    const response = await instance.get(`/profile/${accountname}`);
    return response.data;
  },

  // FollweList 데이터
  async getFollowerList(accountName) {
    const response = await instance.get(`/profile/${accountName}/follower`);
    return response.data;
  },

  // FollowingList 데이터
  async getFollowingdata(token, accountName) {
    const response = await instance(`/profile/${accountName}/following`);
    return response.data;
  },

  async putModifyData(username, accountname, intro, image, Token) {
    const userData = {
      user: {
        username,
        accountname,
        intro,
        image,
      },
    };
    const response = await fetch(`${BASE_URL}/user`, {
      method: 'PUT',
      body: JSON.stringify(userData),
      headers: {
        Authorization: `Bearer ${Token}`,
        'Content-type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  },
};
export default profileAPI;
