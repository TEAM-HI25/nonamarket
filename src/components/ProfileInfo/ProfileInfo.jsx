import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { userInfoData } from '../../redux/module/ProfileData';
import * as S from './StyledProfileInfo';
import UserProfileBtnWrap from './UserProfileBtnWrapp';
import MyProfileBtnWrap from './MyProfileBtnWrapp';
import profileAPI from '../../api/profileAPI';
import Loading from '../Loading/Loading';

const ProfileInfo = ({ authAccountName }) => {
  const [userProfile, setUserProfile] = useState({});

  const location = useLocation();
  const pageAccount = location.pathname.split('/')[2];

  const dispatch = useDispatch();
  const FollowerData = useSelector((state) => state.Profile.profile);

  // const { followerCount, image, followingCount, username, accountname, intro } =
  //   ProfileData;

  const getTestProfile = async () => {
    const data = await profileAPI.getUserInfo(pageAccount);
    setUserProfile(data.profile);
    const ProfileData = { ...data.profile };
    dispatch(userInfoData(ProfileData));
  };

  useEffect(() => {
    getTestProfile();
  }, [pageAccount]);

  return userProfile ? (
    <S.Container>
      <S.ProfileInfoWrapper>
        <h2 className='hidden'>프로필 정보</h2>
        <S.NumberWrapper>
          <Link to='followerlist'>
            <span>{FollowerData.followerCount}</span>
            <span>followers</span>
          </Link>
        </S.NumberWrapper>
        <S.ProfileImg src={userProfile.image} alt='프로필 이미지' />
        <S.NumberWrapper>
          <Link to='followinglist'>
            <span>{userProfile.followingCount}</span>
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
        <UserProfileBtnWrap />
      )}
    </S.Container>
  ) : (
    <Loading />
  );
};

export default ProfileInfo;
