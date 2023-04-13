import { createContext, useReducer, useMemo } from 'react';

// 컨텍스트 공간 만들었음
const UserContext = createContext();
const Reducer = (state, action) => {
  switch (action.type) {
    case 'UserProfile':
      return { ...state, profile: action.payload };
    case 'followerCount':
      return {
        ...state,
        profile: { ...state.profile, followerCount: action.payload },
      };
    default:
      return state;
  }
};

// InitialState Object
const initialState = { profile: {} };

const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const value = useMemo(() => ({ ...state, dispatch }), [state]);

  return (
    // 전역공간에 지정해둬서 다른 애들이 쓸수있게
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
