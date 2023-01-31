import BASE_URL from '../utils/baseUrl';

const imageAPI = {
  async uploadImg(e) {
    const imageFile = e.target.files[0];
    const formData = new FormData();
    formData.append('image', imageFile);

    const response = await fetch(`${BASE_URL}/image/uploadfile`, {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    const imageSrc = `${BASE_URL}/${data.filename}`;
    return imageSrc;
  },
};

export default imageAPI;
