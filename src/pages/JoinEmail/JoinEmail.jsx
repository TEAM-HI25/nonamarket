import { useState, useEffect } from 'react';
import LabelInput from '../../components/common/LabelInput/LabelInput';
import JoinProfileEdit from '../JoinProfileEdit/JoinProfileEdit';
import {
  JoinEmailWrapper,
  JoinEmailTitle,
  JoinEmailBtn,
} from './StyledJoinEmail';
import userAPI from '../../api/userAPI';
import regex from '../../utils/regex';

const JoinEmail = () => {
  const [isNext, setIsNext] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailMsg, setEmailMsg] = useState('');
  const [pwMsg, setPwMsg] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  // 이메일 유효성 검사
  const checkEmail = async () => {
    if (!regex.EMAIL_CHECK.test(email)) {
      setEmailMsg('*올바른 이메일 형식이 아닙니다.');
      setIsValidEmail(false);
    } else {
      const data = await userAPI.checkEmailValid(email);
      if (data.message === '이미 가입된 이메일 주소 입니다.') {
        setEmailMsg('*이미 가입된 이메일 주소 입니다.');
        setIsValidEmail(false);
      } else if (data.message === '사용 가능한 이메일 입니다.') {
        setEmailMsg('');
        setIsValidEmail(true);
      }
    }
  };

  // 비밀번호 유효성 검사
  useEffect(() => {
    if (password.length > 5) {
      setIsValidPassword(true);
      setPwMsg('');
    } else if (password === '') {
      setPwMsg('');
      setIsValidPassword(false);
    } else {
      setIsValidPassword(false);
      setPwMsg('*비밀번호는 6자 이상이어야 합니다.');
    }
  }, [password]);

  const handleData = (event) => {
    if (event.target.type === 'email') {
      setEmail(event.target.value);
    } else if (event.target.type === 'password') {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsNext(true);
  };

  return !isNext ? (
    <JoinEmailWrapper>
      <JoinEmailTitle>이메일로 회원가입</JoinEmailTitle>
      <form onSubmit={handleSubmit}>
        <LabelInput
          label='이메일'
          forid='email'
          type='email'
          placeholder='이메일 주소를 입력해 주세요.'
          state={email}
          onChange={handleData}
          onBlur={checkEmail}
        />
        <div>{emailMsg}</div>
        <LabelInput
          label='비밀번호'
          forid='password'
          type='password'
          placeholder='비밀번호를 설정해 주세요.'
          state={password}
          onChange={handleData}
        />
        <div>{pwMsg}</div>
        <JoinEmailBtn
          name='다음'
          disabled={!(isValidEmail && isValidPassword)}
        />
      </form>
    </JoinEmailWrapper>
  ) : (
    <JoinProfileEdit email={email} password={password} />
  );
};

export default JoinEmail;
