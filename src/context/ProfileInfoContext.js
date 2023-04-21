import { createContext, useReducer, useMemo } from 'react';

// Context 저장공간 생성
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
// 초기상태
const InitioalState = { profile: {} };

// Provider 함수
const ProfileDataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProfileDataReducer, InitioalState);
  const value = useMemo(() => ({ ...state, dispatch }), [state]);
  // useMemo 함수를 활용하여 의존성배열에 state (== initialState) 추가하여 해당 state의 변화만 감지할 수 있도록 하였음.

  return (
    <ProfileDataContext.Provider value={value}>
      {children}
    </ProfileDataContext.Provider>
  );
};

export { ProfileDataContext, ProfileDataContextProvider };
