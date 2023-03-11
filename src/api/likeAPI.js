import BASE_URL from '../utils/baseUrl';

const likeAPI = {
  async getHeart(token, postId) {
    const response = await fetch(`${BASE_URL}/post/${postId}/heart`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  },

  async cancelHeart(token, postId) {
    const response = await fetch(`${BASE_URL}/post/${postId}/unheart`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  },
};

export default likeAPI;
