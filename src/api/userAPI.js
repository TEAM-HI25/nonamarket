import BASE_URL from '../utils/baseUrl';

const userAPI = {
  async getMyinfo(token) {
    const response = await fetch(`${BASE_URL}/user/myinfo`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  },
};

export default userAPI;
