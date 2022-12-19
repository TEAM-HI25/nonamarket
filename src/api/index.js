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
};

export default FetchApi;
