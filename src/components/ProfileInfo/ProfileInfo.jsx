import { useLocation, Link } from 'react-router-dom';
import { useContext } from 'react';
import { ProfileDataContext } from '../../context/ProfileInfoContext';
import * as S from './StyledProfileInfo';
import UserProfileBtnWrap from './UserProfileBtnWrapp';
import MyProfileBtnWrap from './MyProfileBtnWrapp';

const ProfileInfo = ({ authAccountName }) => {
  const location = useLocation();
  const pageAccount = location.pathname.split('/')[2];
  const { profile } = useContext(ProfileDataContext);

  return (
    <S.Container>
      <S.ProfileInfoWrapper>
        <h2 className='hidden'>프로필 정보</h2>
        <S.NumberWrapper>
          <Link to='followerlist'>
            <span>{profile.followerCount}</span>
            <span>followers</span>
          </Link>
        </S.NumberWrapper>
        <S.ProfileImg src={profile.image} alt='프로필 이미지' />
        <S.NumberWrapper>
          <Link to='followinglist'>
            <span>{profile.followingCount}</span>
            <span>followings</span>
          </Link>
        </S.NumberWrapper>
      </S.ProfileInfoWrapper>
      <S.UserWrapper>
        <S.UserName>{profile.username}</S.UserName>
        <S.UserId>{profile.accountname}</S.UserId>
        <S.UserIntro>{profile.intro}</S.UserIntro>
      </S.UserWrapper>
      {pageAccount === authAccountName ? (
        <MyProfileBtnWrap />
      ) : (
        <UserProfileBtnWrap />
      )}
    </S.Container>
  );
};

export default ProfileInfo;
