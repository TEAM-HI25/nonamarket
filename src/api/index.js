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
    console.log(response);
    const data = await response.json();
    return data;
  },

  async uploadImg(e) {
    console.log(e.target.files); // 이벤트핸들러 함수는 이벤트 객체 를받을수있음(ex: event.target.value)
    const imageFile = e.target.files[0]; // 내가 업로드한 파일 정보 꺼내오기
    const formData = new FormData(); // 폼 데이터 만들기
    formData.append('image', imageFile); // 폼 데이터에 내가 업로드한 파일 데이터 추가하기. 폼데이터.append("키","값") FormData{ 'image' : imgFile}

    // 내 로컬에서 서버로 보내는 방법 / 서버가 아래 주소를 받음 , body에 있는 데이터(imageFile)를 서버 주소로 날린다.
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
    // console.log(imageSrc);
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
};

export default FetchApi;
