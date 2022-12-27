import { createContext, useReducer, useMemo } from 'react';

// 컨텍스트 공간 만들었음
const AuthContext = createContext();
// { type: 'login', payload: data.user }
const authReducer = (state, action) => {
  console.log(state);
  console.log(action);
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
  console.log(state);
  const value = useMemo(
    () => ({
      ...state,
      dispatch,
    }),
    [state],
  );

  return (
    // 전역공간에 지정해둬서 다른 애들이 쓸수있게
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
