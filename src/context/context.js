import { createContext, useReducer, useMemo } from 'react';

// 컨텍스트 공간 생성
const AuthContext = createContext();
const authReducer = (state, action) => {
  switch (action.type) {
    case 'login':
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: {
      token: localStorage.getItem('token'),
      accountname: localStorage.getItem('accountname'),
    },
  });
  const value = useMemo(
    () => ({
      ...state,
      dispatch,
    }),
    [state],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
