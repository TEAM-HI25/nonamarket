import { useState, useContext } from 'react';
import LabelInput from '../../components/common/LabelInput/LabelInput';
import FetchApi from '../../api';
import { AuthContext } from '../../context/context';
import * as S from './StyledLoginEmail';

const LoginEmail = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { dispatch } = useContext(AuthContext);

  const handleData = (event) => {
    if (event.target.type === 'email') {
      setEmail(event.target.value);
    } else if (event.target.type === 'password') {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // 새로고침 방지
    const data = await FetchApi.getLogin(email, password);
    console.log(data);
    dispatch({ type: 'login', payload: data.user });
  };

  return (
    <S.LoginWrapper>
      <S.LoginTitle>로그인</S.LoginTitle>
      <form onSubmit={handleSubmit}>
        <LabelInput
          label='이메일'
          forid='email'
          type='email'
          state={email}
          onChange={handleData}
        />
        <LabelInput
          label='비밀번호'
          forid='password'
          type='password'
          state={password}
          onChange={handleData}
        />
        <S.LoginBtn name='로그인' />
      </form>
      <S.LoginLink to='/joinemail'>이메일로 회원가입</S.LoginLink>
    </S.LoginWrapper>
  );
};

export default LoginEmail;
