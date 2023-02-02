import BASE_URL from '../utils/baseUrl';

// UserProfile 에서 사용됨
const postAPI = {
  async loadFeed(token) {
    const response = await fetch(`${BASE_URL}/post/feed`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  },

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

  async deletePost(token, postId) {
    const response = await fetch(`${BASE_URL}/post/${postId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  },

  async reportPost(token, postId) {
    const response = await fetch(`${BASE_URL}/post/${postId}/report`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  },

  async getUserProfile(token, accountname) {
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

  async postUploadImgs(file) {
    const formData = new FormData();
    formData.append('image', file);

    const response = await fetch(`${BASE_URL}/image/uploadfiles`, {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    return data;
  },

  async createPost(token, contentText, img) {
    const response = await fetch(`${BASE_URL}/post`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        post: {
          content: contentText,
          image: img.join(', '),
        },
      }),
    });
    const data = await response.json();
    return data;
  },

  async editPost(token, postid, contentText, img) {
    const response = await fetch(`${BASE_URL}/post/${postid}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        post: {
          content: `${contentText}`,
          image: img.join(','),
        },
      }),
    });
    const data = await response.json();
    return data;
  },
};

export default postAPI;
