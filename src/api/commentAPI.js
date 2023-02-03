// import BASE_URL from '../utills/baseUrl';

const commnetAPI = {
  async deleteComment(token, postid, commentid) {
    const response = await fetch(
      `https://mandarin.api.weniv.co.kr/post/${postid}/comments/${commentid}`,
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

export default commnetAPI;
