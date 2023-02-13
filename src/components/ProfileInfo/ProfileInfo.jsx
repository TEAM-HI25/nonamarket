import { useLocation, Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { UserContext } from '../../context/userContext';
import * as S from './StyledProfileInfo';
import UserProfileBtnWrap from './UserProfileBtnWrapp';
import MyProfileBtnWrap from './MyProfileBtnWrapp';

const ProfileInfo = ({ authAccountName }) => {
  const location = useLocation();
  const pageAccount = location.pathname.split('/')[2];
  const { profile } = useContext(UserContext);
  const [followerCnt, setFollowerCnt] = useState(profile.followerCount);
  const [followingCnt, setFolloingCnt] = useState(profile.followingCount);

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
        <S.ProfileImg src={profile.image} alt='프로필 이미지' />
        <S.NumberWrapper>
          <Link to='followinglist'>
            <span>{followingCnt}</span>
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
        <UserProfileBtnWrap
          setFollowerCount={setFollowerCnt}
          setFolloingCount={setFolloingCnt}
        />
      )}
    </S.Container>
  );
};

export default ProfileInfo;
