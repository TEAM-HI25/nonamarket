import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import LabelInput from '../../components/common/LabelInput/LabelInput';
import JoinProfileEdit from '../JoinProfileEdit/JoinProfileEdit';
import {
  JoinEmailWrapper,
  JoinEmailTitle,
  JoinEmailBtn,
} from './StyledJoinEmail';
import FetchApi from '../../api';

const JoinEmail = () => {
  const [isNext, setIsNext] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailMsg, setEmailMsg] = useState('');
  const [pwMsg, setPwMsg] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  // const navigate = useNavigate();

  const EMAIL_CHECK =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,6}$/i;

  const checkEmail = async () => {
    if (!EMAIL_CHECK.test(email)) {
      setEmailMsg('*올바른 이메일 형식이 아닙니다.');
      setIsValidEmail(false);
    } else {
      const data = await FetchApi.checkEmailValid(email);
      // console.log(data);
      if (data.message === '이미 가입된 이메일 주소 입니다.') {
        setEmailMsg('*이미 가입된 이메일 주소 입니다.');
        setIsValidEmail(false);
      } else if (data.message === '사용 가능한 이메일 입니다.') {
        setEmailMsg('');
        setIsValidEmail(true);
      }
    }
  };

  // 유효할때 버튼 활성화
  // useEffect(() => {
  //   return EMAIL_CHECK.test(email)
  //     ? setIsValidEmail(true)
  //     : setIsValidEmail(false);
  // }, [email]);

  // 유효하지 않으면 오류 메세지
  const checkPassword = () => {
    if (password.length < 6) {
      setPwMsg('*비밀번호는 6자 이상이어야 합니다.');
      // setIsValidPassword(false);
    } else {
      setPwMsg('');
      // setIsValidPassword(true);
    }
  };

  useEffect(() => {
    return password.length > 5
      ? setIsValidPassword(true)
      : setIsValidPassword(false);
  }, [password]);

  const handleData = (event) => {
    if (event.target.type === 'email') {
      setEmail(event.target.value);
    } else if (event.target.type === 'password') {
      setPassword(event.target.value);
    }
  };

  // const MoveNextPage = () => {
  //   navigate('/joinprofileedit', {
  //     state: {
  //       email,
  //       password,
  //     },
  //   });
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsNext(true);
  };

  return (
    <div>
      {!isNext ? (
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
              onBlur={checkPassword}
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
      )}
    </div>
  );
};

export default JoinEmail;
