const initialState = { profile: {} };

export const userInfoData = (payload) => {
  return { type: 'USERINFO_DATA', payload };
};
export const followCount = (payload) => {
  return { type: 'FOLLOW_COUNT', payload };
};
/* eslint-disable-next-line default-param-last */
export const ProfileReducer = (state = initialState, action) => {
  if (action.type === 'USERINFO_DATA') {
    return { ...state, profile: action.payload };
  }
  if (action.type === 'FOLLOW_COUNT') {
    return {
      ...state,
      profile: { ...state.profile, followerCount: action.payload },
    };
  }
  return state;
};
