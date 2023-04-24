import BASE_URL from '../utils/baseUrl';
import { imgInstance } from '../axios/axios';

const imageAPI = {
  async uploadImg(e) {
    const imageFile = e.target.files[0];
    const formData = new FormData();
    formData.append('image', imageFile);

    const response = await imgInstance.post(`/image/uploadfile`, formData);
    const imageSrc = `${BASE_URL}/${response.data.filename}`;
    return imageSrc;
  },
};

export default imageAPI;
