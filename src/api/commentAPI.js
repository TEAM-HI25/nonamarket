import BASE_URL from '../utils/baseUrl';

const commentAPI = {
  async uploadComment(token, postId, text) {
    const response = await fetch(`${BASE_URL}/post/${postId}/comments`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        comment: {
          content: `${text}`,
        },
      }),
    });
    const data = await response.json();
    return data;
  },

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

export default commentAPI;
