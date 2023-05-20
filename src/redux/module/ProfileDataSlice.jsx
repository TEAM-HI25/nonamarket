import { createSlice } from '@reduxjs/toolkit';
// createSlice 함수를 통해 한번에 ActionCreate과 reducer 로직을 구현할 수 있게 되었음.
const ProfileSlice = createSlice({
  name: 'Profile',
  initialState: {
    profile: {},
  },
  reducers: {
    userInfoData(state, action) {
      /* eslint-disable-next-line no-param-reassign */
      state.profile = action.payload;
    },
    followCount: (state, action) => {
      /* eslint-disable-next-line no-param-reassign */
      state.profile.followerCount = action.payload;
    },
  },
});

export const { userInfoData, followCount } = ProfileSlice.actions;
export default ProfileSlice.reducer;
