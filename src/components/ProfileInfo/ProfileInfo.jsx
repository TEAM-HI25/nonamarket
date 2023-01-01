import { useLocation, Link } from 'react-router-dom';
import { useState } from 'react';
import * as S from './StyledProfileInfo';
import UserProfileBtnWrap from './UserProfileBtnWrapp';
import MyProfileBtnWrap from './MyProfileBtnWrapp';

const ProfileInfo = ({ userProfile, authAccountName }) => {
  const location = useLocation();
  const pageAccount = location.pathname.split('/')[2];
  const [followerCnt, setFollowerCnt] = useState(userProfile.followerCount);
  const [followingCnt, setFolloingCnt] = useState(userProfile.followingCount);
  console.log(userProfile.followerCount);
  console.log(followerCnt);
  return (
    <S.Container>
      <S.ProfileInfoWrapper>
        <h2 className='hidden'>프로필 정보</h2>
        <S.NumberWrapper>
          <Link to='followerlist'>
            <span>{followerCnt}</span>
            <span>followers</span>
          </Link>
        </S.NumberWrapper>
        <S.ProfileImg src={userProfile.image} alt='프로필 이미지' />
        <S.NumberWrapper>
          <Link to='followinglist'>
            <span>{followingCnt}</span>
            <span>followings</span>
          </Link>
        </S.NumberWrapper>
      </S.ProfileInfoWrapper>
      <S.UserWrapper>
        <S.UserName>{userProfile.username}</S.UserName>
        <S.UserId>{userProfile.accountname}</S.UserId>
        <S.UserIntro>{userProfile.intro}</S.UserIntro>
      </S.UserWrapper>
      {pageAccount === authAccountName ? (
        <MyProfileBtnWrap />
      ) : (
        <UserProfileBtnWrap
          userProfile={userProfile}
          setFollowerCount={setFollowerCnt}
          setFolloingCount={setFolloingCnt}
        />
      )}
    </S.Container>
  );
};

export default ProfileInfo;
