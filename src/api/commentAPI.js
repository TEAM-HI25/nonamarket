import BASE_URL from '../utils/baseUrl';

const commnetAPI = {
  async deleteComment(token, postId, commentid) {
    const response = await fetch(
      `${BASE_URL}/post/${postId}/comments/${commentid}`,
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

  async reportComment(token, postId, commentid) {
    const response = await fetch(
      `${BASE_URL}/post/${postId}/comments/${commentid}/report`,
      {
        method: 'POST',
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

export default commnetAPI;
