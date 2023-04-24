import imageCompression from 'browser-image-compression';
import { instance } from '../axios/axios';

const postAPI = {
  async loadFeed() {
    const response = await instance.get(`/post/feed`);
    return response.data;
  },

  async getMyPost(pageAccount) {
    const response = await instance.get(`/post/${pageAccount}/userpost`);
    return response.data;
  },

  async deletePost(postId) {
    const response = await instance.delete(`/post/${postId}`);
    return response.data;
  },

  async reportPost(postId) {
    const response = await instance.post(`/post/${postId}/report`);
    return response.data;
  },

  async postUploadImgs(file) {
    // 이미지 압축
    const options = {
      maxSizeMB: 2,
      maxWidthOrHeight: 440,
    };
    const compressedFile = await imageCompression(file, options);
    const newFile = new File([compressedFile], `${compressedFile.name}`, {
      type: compressedFile.type,
    });

    const formData = new FormData();
    formData.append('image', newFile);

    const response = await instance.post(`/image/uploadfiles`, formData);
    return response.data;
  },

  async createPost(contentText, img) {
    const response = await instance.post(`/post`, {
      post: {
        content: contentText,
        image: img.join(', '),
      },
    });
    return response.data;
  },

  async editPost(postid, contentText, img) {
    const response = await instance.put(`/post/${postid}`, {
      post: {
        content: `${contentText}`,
        image: img.join(','),
      },
    });
    return response.data;
  },

  async getPost(postid) {
    const response = await instance.get(`/post/${postid}`);
    const postContent = response.data.post;
    return postContent;
  },

  async getComment(postid) {
    const response = await instance.get(`/post/${postid}/comments`);
    return response.data;
  },

  async getUserPost(postid) {
    const response = await instance.get(`/post/${postid}`);
    return response.data;
  },
};

export default postAPI;
