import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import LabelInput from '../../components/common/LabelInput/LabelInput';
import userAPI from '../../api/userAPI';
import regex from '../../utils/regex';
import { AuthContext } from '../../context/context';
import * as S from './StyledLoginEmail';

const LoginEmail = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { dispatch } = useContext(AuthContext);
  const [isValid, setIsValid] = useState(false); // 유효성검사 state
  const [message, setMessage] = useState(''); // 에러메세지 state
  const navigate = useNavigate();

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await userAPI.getLogin(email, password);
    if (data.message === '이메일 또는 비밀번호가 일치하지 않습니다.') {
      setMessage('이메일 또는 비밀번호가 일치하지 않습니다.');
    } else {
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
        </form>
        <S.LoginLink to='/joinemail'>이메일로 회원가입</S.LoginLink>
      </S.MainWrapper>
    </S.LoginWrapper>
  );
};

export default LoginEmail;
