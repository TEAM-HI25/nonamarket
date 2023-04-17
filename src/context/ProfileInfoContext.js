import { createContext, useReducer, useMemo } from 'react';

// 컨텍스트 공간 생성
const ProfileDataContext = createContext();

const ProfileDataReducer = (state, action) => {
  switch (action.type) {
    case 'USERINFO_DATA':
      return { ...state, profile: action.payload };
    case 'FOLLOW_COUNT':
      return {
        ...state,
        profile: { ...state.profile, followerCount: action.payload },
      };
    default:
      return state;
  }
};

const InitioalState = { profile: {} };

const ProfileDataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProfileDataReducer, InitioalState);
  const value = useMemo(() => ({ ...state, dispatch }), [state]);

  return (
    <ProfileDataContext.Provider value={value}>
      {children}
    </ProfileDataContext.Provider>
  );
};

export { ProfileDataContext, ProfileDataContextProvider };
