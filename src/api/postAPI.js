import BASE_URL from '../utils/baseUrl';

// UserProfile 에서 사용됨
const postAPI = {
  async getMyPost(token, pageAccount) {
    const response = await fetch(`${BASE_URL}/post/${pageAccount}/userpost`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  },
};

export default postAPI;
