import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import LabelInput from '../../components/common/LabelInput/LabelInput';
import FetchApi from '../../api';
import regex from '../../utils/regex';
import { AuthContext } from '../../context/context';
import * as S from './StyledLoginEmail';

const LoginEmail = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { dispatch } = useContext(AuthContext);
  const [isValid, setIsValid] = useState(false); // 유효성검사 state
  const [message, setMessage] = useState(''); // 에러메세지 state
  const navigate = useNavigate(); // e

  const handleData = (event) => {
    if (event.target.type === 'email') {
      setEmail(event.target.value);
    } else if (event.target.type === 'password') {
      setPassword(event.target.value);
    }
  };
  // 정규표현식 일치 여부에 따라 버튼색이 바뀌는 함수
  const handleCheckValid = () => {
    return regex.EMAIL_CHECK.test(email) && password.length > 5
      ? setIsValid(true)
      : setIsValid(false);
  };

  // 로컬스토리지에 토큰 저장
  const handleSubmit = async (event) => {
    event.preventDefault(); // 새로고침 방지
    const data = await FetchApi.getLogin(email, password);
    if (data.message === '이메일 또는 비밀번호가 일치하지 않습니다.') {
      setMessage('이메일 또는 비밀번호가 일치하지 않습니다.');
    } else {
      // console.log(data);
      // const token = data.user.token;
      localStorage.setItem('token', data.user.token);
      localStorage.setItem('accountname', data.user.accountname);

      const loginData = {
        token: data.user.token,
        accountname: data.user.accountname,
      };

      dispatch({ type: 'login', payload: loginData });
      navigate('/homefeed');
    }
  };

  return (
    <S.LoginWrapper>
      <S.MainWrapper>
        <S.LoginTitle>로그인</S.LoginTitle>
        <form onSubmit={handleSubmit}>
          <LabelInput
            label='이메일'
            forid='email'
            type='email'
            state={email}
            onChange={handleData}
            onKeyUp={handleCheckValid}
          />
          <LabelInput
            label='비밀번호'
            forid='password'
            type='password'
            state={password}
            onChange={handleData}
            onKeyUp={handleCheckValid}
          />
          <div>{message}</div>
          <S.LoginBtn name='로그인' disabled={!isValid} />
          {/* disabled 가 true 일때 버튼이 비활성화 , false 일때 활성화  defalut는 false */}
          {/* 유효성 검사에서 true를 반환, disalbed에서 (!유효성검사결과) 활성화 === false */}
        </form>
        <S.LoginLink to='/joinemail'>이메일로 회원가입</S.LoginLink>
      </S.MainWrapper>
    </S.LoginWrapper>
  );
};

export default LoginEmail;
