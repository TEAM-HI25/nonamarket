import { combineReducers } from 'redux';
import { ProfileReducer } from './ProfileData';
import { LoginReducer } from './LoginData';

const rootReducer = combineReducers({
  Profile: ProfileReducer,
  Login: LoginReducer,
});

export default rootReducer;
