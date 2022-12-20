import { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import ImageInput from '../../components/common/ImageInput/ImageInput';
import LabelInput from '../../components/common/LabelInput/LabelInput';
import FetchApi from '../../api';
import { AuthContext } from '../../context/context';
import * as S from './StyledJoinProfileEdit';

const JoinProfileEdit = () => {
  const [userName, setUserName] = useState('');
  const [img, setImg] = useState('');
  const [userAccountName, setUserAccountName] = useState('');
  const [userIntro, setUserIntro] = useState('');
  const location = useLocation();
  const { dispatch } = useContext(AuthContext);
  // const email = loacation.state.email;
  // const password = loaction.state.password;
  // console.log(location);
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const Signdata = await FetchApi.getSignUp(
      userName,
      location.state.email,
      location.state.password,
      userAccountName,
      userIntro,
      img,
    );
    console.log(Signdata);
    // 토큰 받아오기 위해 로그인 로직 다시 씀,로그인 로직 실행안하면 토큰 없는 상태로 홈피드로 들어가게됨
    const data = await FetchApi.getLogin(
      location.state.email,
      location.state.password,
    );
    console.log(data);
    localStorage.setItem('token', data.user.token);
    dispatch({ type: 'login', payload: data.user });
  };

  return (
    <S.JoinPfWrap>
      <S.JoinPfTitle>프로필 설정</S.JoinPfTitle>
      <S.JoinPfDesc>나중에 언제든지 변경할 수 있습니다.</S.JoinPfDesc>
      <form onSubmit={handleSubmit}>
        <ImageInput onChange={handleGetImg} />
        <LabelInput
          label='사용자 이름'
          forid='username'
          type='text'
          state={userName}
          placeholder='2~10자 이내여야 합니다.'
          onChange={handleData}
        />
        <LabelInput
          label='계정 ID'
          forid='useraccountname'
          type='text'
          placeholder='영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.'
          state={userAccountName}
          onChange={handleData}
        />
        <LabelInput
          label='소개'
          forid='userintro'
          type='text'
          state={userIntro}
          placeholder='자신과 판매할 상품에 대해 소개해 주세요!'
          onChange={handleData}
        />
        <S.JoinPfBtn name='감귤마켓 시작하기' />
      </form>
    </S.JoinPfWrap>
  );
};

export default JoinProfileEdit;
