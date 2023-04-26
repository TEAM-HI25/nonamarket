import { instance } from '../axios/axios';

const userAPI = {
  async getSignUp(username, email, password, accountname, intro, image) {
    const userData = {
      user: {
        username,
        email,
        password,
        accountname,
        intro,
        image,
      },
    };
    const response = await instance.post(`/user`, userData);
    return response.data;
  },

  async getLogin(email, password) {
    const response = await instance.post(`/user/login`, {
      user: {
        email,
        password,
      },
    });
    return response.data;
  },

  async checkEmailValid(email) {
    const response = await instance.post(`/user/emailvalid`, {
      user: {
        email,
      },
    });
    return response.data;
  },

  async checkAccountValid(accountname) {
    const response = await instance.post(`/user/accountnamevalid`, {
      user: {
        accountname,
      },
    });
    return response.data;
  },

  async getMyinfo() {
    const response = await instance.get(`/user/myinfo`);
    return response.data;
  },
};

export default userAPI;
