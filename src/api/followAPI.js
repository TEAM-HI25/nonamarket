import BASE_URL from '../utils/baseUrl';

const followAPI = {
  async followingPost(token, pageAccount) {
    const response = await fetch(`${BASE_URL}/profile/${pageAccount}/follow`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  },

  async unfollowingPost(token, pageAccount) {
    const response = await fetch(
      `${BASE_URL}/profile/${pageAccount}/unfollow`,
      {
        method: 'DELETE',
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

export default followAPI;
