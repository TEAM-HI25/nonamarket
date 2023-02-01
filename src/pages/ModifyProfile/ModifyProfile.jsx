import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/context';
import userAPI from '../../api/userAPI';
import imageAPI from '../../api/imageAPI';
import Nav from '../../components/Nav/Nav';
import ImageInput from '../../components/common/ImageInput/ImageInput';
import LabelInput from '../../components/common/LabelInput/LabelInput';
import * as S from './StyledModifyProfile';

const ModifyProfile = () => {
  const navigate = useNavigate();
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
  const { user, dispatch } = useContext(AuthContext);
  const Token = user.token;

  // 프로필 데이터 받아오기
  useEffect(() => {
    const getUserInfo = async () => {
      const Data = await userAPI.getMyinfo(Token);
      setUserName(Data.user.username);
      setImg(Data.user.image);
      setUserAccountName(Data.user.accountname);
      setUserIntro(Data.user.intro);
    };
    getUserInfo();
  }, []);

  // 영문,숫자,특수문자만 사용가능한 정규표현식
  const ACCOUNT_CHECK = /^[-._a-z0-9]+$/gi;
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
    if (!ACCOUNT_CHECK.test(userAccountName)) {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ModifyData = await userAPI.putModifyData(
      userName,
      userAccountName,
      userIntro,
      img,
      Token,
    );
    console.log(ModifyData);
    const changeAccount = {
      token: Token,
      accountname: ModifyData.user.accountname,
    };
    localStorage.setItem('accountname', ModifyData.user.accountname);
    dispatch({ type: 'login', payload: changeAccount });
    navigate(`/profile/${ModifyData.user.accountname}`);
  };

  return (
    <S.AllWrapp>
      <h1 className='hidden'>프로필 수정 페이지</h1>
      <Nav
        type='upload'
        btnName='저장'
        disabled={!(isValidName && isValidAccount)}
        onClick={handleSubmit}
      />
      <S.FormWrapp>
        <ImageInput onChange={handleGetImg} img={img} />
        <LabelInput
          type='text'
          label='사용자 이름'
          forid='username'
          placeholder='2~10자 이내여야 합니다.'
          state={userName}
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
      </S.FormWrapp>
    </S.AllWrapp>
  );
};

export default ModifyProfile;
