import { instance } from '../axios/axios';

const commentAPI = {
  async uploadComment(postId, text) {
    const response = await instance.post(`/post/${postId}/comments`, {
      comment: { content: `${text}` },
    });
    return response.data;
  },

  async deleteComment(postId, commentid) {
    const response = await instance.delete(
      `/post/${postId}/comments/${commentid}`,
    );
    return response.data;
  },

  async reportComment(postId, commentid) {
    const response = await instance.post(
      `/post/${postId}/comments/${commentid}/report`,
    );
    return response.data;
  },
};

export default commentAPI;
