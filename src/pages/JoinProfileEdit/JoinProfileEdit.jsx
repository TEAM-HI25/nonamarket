import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LoginAccess } from '../../redux/module/LoginData';
import ImageInput from '../../components/common/ImageInput/ImageInput';
import LabelInput from '../../components/common/LabelInput/LabelInput';
import imageAPI from '../../api/imageAPI';
import userAPI from '../../api/userAPI';
import regex from '../../utils/regex';
import BASE_URL from '../../utils/baseUrl';
import * as S from './StyledJoinProfileEdit';

const JoinProfileEdit = ({ email, password }) => {
  const [userName, setUserName] = useState('');
  const [img, setImg] = useState(`${BASE_URL}/1671553289850.png`);
  const [userAccountName, setUserAccountName] = useState('');
  const [userIntro, setUserIntro] = useState('');
  const [nameMsg, setNameMsg] = useState('');
  const [accountMsg, setAccountMsg] = useState('');
  const [isValidName, setIsValidName] = useState(false);
  const [isValidAccount, setIsValidAccount] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 영문,숫자,특수문자만 사용가능한 정규표현식
  const handleGetImg = async (event) => {
    const data = await imageAPI.uploadImg(event);
    setImg(data);
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
    if (!regex.ACCOUNT_CHECK.test(userAccountName)) {
      setAccountMsg('*영문자, 숫자, 점(.), 밑줄(_)만 포함해야 합니다.');
      setIsValidAccount(false);
    } else {
      const data = await userAPI.checkAccountValid(userAccountName);
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
    await userAPI.getSignUp(
      userName,
      email,
      password,
      userAccountName,
      userIntro,
      img,
    );

    const data = await userAPI.getLogin(email, password);
    localStorage.setItem('token', data.user.token);
    localStorage.setItem('accountname', data.user.accountname);

    const loginData = {
      token: data.user.token,
      accountname: data.user.accountname,
    };

    dispatch(LoginAccess(loginData));
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
          name='노나마켓 시작하기'
          disabled={!(isValidName && isValidAccount)}
        />
      </form>
    </S.JoinPfWrap>
  );
};

export default JoinProfileEdit;
