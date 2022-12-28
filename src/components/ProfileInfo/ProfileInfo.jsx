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

const ProfileInfo = ({ userProfile, authAccountName }) => {
  const location = useLocation();
  const pageAccount = location.pathname.split('/')[2];

  return (
    <S.Container>
      <S.ProfileInfoWrapper>
        <h2 className='hidden'>프로필 정보</h2>
        <S.NumberWrapper>
          <S.NumberOfFollowers>{userProfile.followerCount}</S.NumberOfFollowers>
          <span>followers</span>
        </S.NumberWrapper>
        <S.ProfileImg src={userProfile.image} alt='프로필 이미지' />
        <S.NumberWrapper>
          <S.NumberOfFollowings>
            {userProfile.followingCount}
          </S.NumberOfFollowings>
          <span>followings</span>
        </S.NumberWrapper>
      </S.ProfileInfoWrapper>
      <S.UserWrapper>
        <S.UserName>{userProfile.username}</S.UserName>
        <S.UserId>{userProfile.accountname}</S.UserId>
        <S.UserIntro>{userProfile.userintro}</S.UserIntro>
      </S.UserWrapper>
      {pageAccount === authAccountName ? (
        <MyProfileBtnWrap />
      ) : (
        <YourProfileBtnWrap />
      )}
    </S.Container>
  );
};

export default ProfileInfo;
