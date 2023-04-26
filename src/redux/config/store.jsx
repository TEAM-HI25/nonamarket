import { createStore } from 'redux';
import { ProfileReducer } from '../module/ProfileData';

export const store = createStore(ProfileReducer);

export default store;
