import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
import ImageInput from '../../components/common/ImageInput/ImageInput';
import LabelInput from '../../components/common/LabelInput/LabelInput';
import FetchApi from '../../api';
import { AuthContext } from '../../context/context';
import * as S from './StyledJoinProfileEdit';

const JoinProfileEdit = ({ email, password }) => {
  const [userName, setUserName] = useState('');
  const [img, setImg] = useState(
    'https://mandarin.api.weniv.co.kr/1671553289850.png',
  );
  const [userAccountName, setUserAccountName] = useState('');
  const [userIntro, setUserIntro] = useState('');
  const [nameMsg, setNameMsg] = useState('');
  const [accountMsg, setAccountMsg] = useState('');
  const [isValidName, setIsValidName] = useState(false);
  const [isValidAccount, setIsValidAccount] = useState(false);
  const navigate = useNavigate();
  // const location = useLocation(); 삭제예정
  const { dispatch } = useContext(AuthContext);

  // const email = loacation.state.email;
  // const password = loaction.state.password;
  // console.log(location);

  // 영문,숫자,특수문자만 사용가능한 정규표현식
  const ACCOUNT_CHECK = /^[-._a-z0-9]+$/gi;
  const handleGetImg = async (event) => {
    const data = await FetchApi.uploadImg(event); // imgSrc를 리턴 받음
    setImg(data); // img == imgSrc
    console.log(img);
  };

  const handleData = (event) => {
    if (event.target.id === 'username') {
      setUserName(event.target.value);
    } else if (event.target.id === 'useraccountname') {
      setUserAccountName(event.target.value);
    } else if (event.target.id === 'userintro') {
      setUserIntro(event.target.value);
    }
  };

  // 이름 유효성 검사
  const handleCheckName = () => {
    if (userName.length >= 2 && userName.length <= 10) {
      setNameMsg('');
      setIsValidName(true);
    } else {
      setNameMsg('*2~10자 이내로 작성해주세요.');
      setIsValidName(false);
    }
  };

  // 계정 유효성 검사
  const handleCheckAccount = async () => {
    if (!ACCOUNT_CHECK.test(userAccountName)) {
      setAccountMsg('*영문자, 숫자, 점(.), 밑줄(_)만 포함해야 합니다.');
      setIsValidAccount(false);
    } else {
      const data = await FetchApi.checkAccountValid(userAccountName);
      if (data.message === '이미 가입된 계정ID 입니다.') {
        setAccountMsg('*이미 가입된 계정ID 입니다.');
        setIsValidAccount(false);
      } else if (data.message === '사용 가능한 계정ID 입니다.') {
        setAccountMsg('');
        setIsValidAccount(true);
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const Signdata = await FetchApi.getSignUp(
      userName,
      email,
      password,
      userAccountName,
      userIntro,
      img,
    );
    console.log(Signdata);
    // 토큰 받아오기 위해 로그인 로직 다시 씀,로그인 로직 실행안하면 토큰 없는 상태로 홈피드로 들어가게됨
    const data = await FetchApi.getLogin(email, password);
    // console.log(data);
    localStorage.setItem('token', data.user.token);
    localStorage.setItem('accountname', data.user.accountname);

    const loginData = {
      token: data.user.token,
      accountname: data.user.accountname,
    };

    dispatch({ type: 'login', payload: loginData });
    navigate('/homefeed');
  };

  return (
    <S.JoinPfWrap>
      <S.JoinPfTitle>프로필 설정</S.JoinPfTitle>
      <S.JoinPfDesc>나중에 언제든지 변경할 수 있습니다.</S.JoinPfDesc>
      <form onSubmit={handleSubmit}>
        <ImageInput onChange={handleGetImg} img={img} />
        <LabelInput
          label='사용자 이름'
          forid='username'
          type='text'
          state={userName}
          placeholder='2~10자 이내여야 합니다.'
          onChange={handleData}
          onBlur={handleCheckName}
        />
        <div>{nameMsg}</div>
        <LabelInput
          label='계정 ID'
          forid='useraccountname'
          type='text'
          placeholder='영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.'
          state={userAccountName}
          onChange={handleData}
          onBlur={handleCheckAccount}
        />
        <div>{accountMsg}</div>
        <LabelInput
          label='소개'
          forid='userintro'
          type='text'
          state={userIntro}
          placeholder='자신과 판매할 상품에 대해 소개해 주세요!'
          onChange={handleData}
        />
        <S.JoinPfBtn
          name='감귤마켓 시작하기'
          disabled={!(isValidName && isValidAccount)}
        />
      </form>
    </S.JoinPfWrap>
  );
};

export default JoinProfileEdit;
