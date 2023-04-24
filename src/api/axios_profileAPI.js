import { instance } from '../axios/axios';

const getUserInfo2 = async (accountname) => {
  const response = await instance.get(`/profile/${accountname}`);
  return response.data;
};
export default getUserInfo2;
