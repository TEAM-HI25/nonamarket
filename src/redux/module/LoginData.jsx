const initialState = {
  user: {
    token: localStorage.getItem('token'),
    accountname: localStorage.getItem('accountname'),
  },
};

export const LoginAccess = (payload) => {
  return { type: 'LOGIN_DATA', payload };
};
/* eslint-disable-next-line default-param-last */
export const LoginReducer = (state = initialState, action) => {
  if (action.type === 'LOGIN_DATA') {
    return { ...state, user: action.payload };
  }
  return state;
};

export default { LoginAccess, LoginReducer };
