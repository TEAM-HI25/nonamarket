import { createSlice } from '@reduxjs/toolkit';
// createSlice 함술르 통해 한번에 ActionCreate과 reducer 로직을 구현할 수 있게 되었음.
const LoginSlice = createSlice({
  name: 'Login',
  initialState: {
    user: {
      token: localStorage.getItem('token'),
      accountname: localStorage.getItem('accountname'),
    },
  },
  reducers: {
    LoginAccess(state, action) {
      /* eslint-disable-next-line no-param-reassign */
      state.user = action.payload;
    },
  },
});

export const { LoginAccess } = LoginSlice.actions;
export default LoginSlice.reducer;
