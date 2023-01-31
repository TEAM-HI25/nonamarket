import BASE_URL from '../utils/baseUrl';

const profileAPI = {
  // UserProfile 데이터
  async getUserInfo(token, accountname) {
    const response = await fetch(`${BASE_URL}/profile/${accountname}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  },
  // FollweList 데이터

  async getFollowerList(token, accountName) {
    const response = await fetch(
      `${BASE_URL}/profile/${accountName}/follower`,
      {
        method: `GET`,
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
export default profileAPI;
