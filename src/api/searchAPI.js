import BASE_URL from '../utils/baseUrl';

const searchAPI = {
  async searchUser(keyword, token) {
    const response = await fetch(
      `${BASE_URL}/user/searchuser/?keyword=${keyword}`,
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
};

export default searchAPI;
