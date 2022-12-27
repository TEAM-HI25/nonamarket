import { useLocation } from 'react-router-dom';
// import { useContext, useState } from 'react';
// import { AuthContext } from '../../context/context';
import Button from '../common/Button/Button';
// import profileImg from '../../assets/images/profile-image.svg';
import iconMessageCircle from '../../assets/images/icon-message-circle.svg';
import iconShare from '../../assets/images/icon-share.svg';
import * as S from './StyledProfileInfo';

const YourProfileBtnWrap = () => {
  return (
    <S.BtnWrapper>
      <S.Btn>
        <img src={iconMessageCircle} alt='메세지아이콘' />
      </S.Btn>
      <Button name='팔로우' type='button' size='m' />
      <S.Btn>
        <img src={iconShare} alt='공유아이콘' />
      </S.Btn>
    </S.BtnWrapper>
  );
};

const MyProfileBtnWrap = () => {
  return (
    <S.BtnWrapper>
      <Button name='프로필 수정' type='button' size='m' />
      <Button name='상품 등록' type='button' size='m' />
    </S.BtnWrapper>
  );
};

const ProfileInfo = ({
  userImg,
  userName,
  userAccountName,
  userIntro,
  followerCount,
  followingCount,
}) => {
  const location = useLocation();
  return (
    <S.Container>
      <S.ProfileInfoWrapper>
        <h2 className='hidden'>프로필 정보</h2>
        <S.NumberWrapper>
          <S.NumberOfFollowers>{followerCount}</S.NumberOfFollowers>
          <span>followers</span>
        </S.NumberWrapper>
        <S.ProfileImg src={userImg} alt='프로필 이미지' />
        <S.NumberWrapper>
          <S.NumberOfFollowings>{followingCount}</S.NumberOfFollowings>
          <span>followings</span>
        </S.NumberWrapper>
      </S.ProfileInfoWrapper>
      <S.UserWrapper>
        <S.UserName>{userName}</S.UserName>
        <S.UserId>{userAccountName}</S.UserId>
        <S.UserIntro>{userIntro}</S.UserIntro>
      </S.UserWrapper>
      {location.pathname === '/yourprofile' ? (
        <YourProfileBtnWrap />
      ) : (
        <MyProfileBtnWrap />
      )}
    </S.Container>
  );
};

export default ProfileInfo;
