const BASE_URL = 'https://mandarin.api.weniv.co.kr';

const FetchApi = {
  async getLogin(email, password) {
    const response = await fetch(`${BASE_URL}/user/login`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          email,
          password,
        },
      }),
    });
    const data = await response.json();
    return data;
  },

  async checkEmailValid(email) {
    const response = await fetch(`${BASE_URL}/user/emailvalid`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          email,
        },
      }),
    });
    const data = await response.json();
    return data;
  },

  async uploadImg(e) {
    console.log(e.target.files);
    const imageFile = e.target.files[0];
    const formData = new FormData();
    formData.append('image', imageFile);

    const response = await fetch(`${BASE_URL}/image/uploadfile`, {
      method: 'POST',
      // headers: {
      //   'Content-type': 'multipart/form-data',
      // },
      body: formData,
    });

    const data = await response.json();
    console.log(data);
    const imageSrc = `${BASE_URL}/${data.filename}`;
    return imageSrc;
  },

  async uploadImgs(e) {
    console.log(e.target.files);
    const imageFile = e.target.files[0];
    const formData = new FormData();
    formData.append('image', imageFile);

    const response = await fetch(`${BASE_URL}/image/uploadfiles`, {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    console.log(data);
    const imageSrc = `${BASE_URL}/${data[0].filename}`;
    return imageSrc;
  },

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

    const response = await fetch(`${BASE_URL}/user`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();
    return data;
  },

  async checkAccountValid(accountname) {
    const response = await fetch(`${BASE_URL}/user/accountnamevalid`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          accountname,
        },
      }),
    });

    const data = await response.json();
    return data;
  },

  async searchUser(keyword, token) {
    const response = await fetch(
      `${BASE_URL}/user/searchuser/?keyword=${keyword}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      },
    );
    const data = await response.json();
    return data;
  },

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

  async registerProduct(reqData, token) {
    const response = await fetch(`${BASE_URL}/product`, {
      method: 'POST',

      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify(reqData),
    });
    const data = await response.json();
    return data;
  },

  async getMyinfo(token) {
    const response = await fetch(`${BASE_URL}/user/myinfo`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  },

  async getUserInfo(token, accountname) {
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

  async loadProductFeed(token, pageAccount) {
    const response = await fetch(`${BASE_URL}/product/${pageAccount}`, {
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

export default FetchApi;
