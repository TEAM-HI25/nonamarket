import { configureStore } from '@reduxjs/toolkit';
import LofinData from '../module/LoginData';
import ProfileData from '../module/ProfileDataSlice';

export const store = configureStore({
  reducer: { Profile: ProfileData, Login: LofinData },
});

export default store;
