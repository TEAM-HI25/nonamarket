import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { userInfoData } from '../../redux/module/ProfileDataSlice';
import * as S from './StyledProfileInfo';
import UserProfileBtnWrap from './UserProfileBtnWrapp';
import MyProfileBtnWrap from './MyProfileBtnWrapp';
import profileAPI from '../../api/profileAPI';
import Loading from '../Loading/Loading';
import defaultImg from '../../assets/images/profile-image-mini.svg';

const ProfileInfo = ({ authAccountName }) => {
  const [userProfile, setUserProfile] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();
  const pageAccount = location.pathname.split('/')[2];

  const dispatch = useDispatch();
  const ProfileData = useSelector((state) => state.Profile.profile);

  const { followerCount, followingCount, username, accountname, intro } =
    ProfileData;

  const handleImgError = (e) => {
    e.target.src = defaultImg;
  };

  useEffect(() => {
    const getTestProfile = async () => {
      try {
        setIsLoading(true);
        const data = await profileAPI.getUserInfo(pageAccount);
        setUserProfile(data.profile);
        const newProfileData = { ...data.profile };
        dispatch(userInfoData(newProfileData));
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getTestProfile();
  }, [pageAccount]);

  // API 서버 변경으로 인한 임시 image 데이터 처리
  let profileImg = defaultImg;
  if (userProfile?.image) {
    profileImg = userProfile.image.includes('mandarin.api')
      ? userProfile.image.replace('mandarin.api', 'api.mandarin')
      : userProfile.image;
  }

  return !isLoading ? (
    <S.Container>
      <S.ProfileInfoWrapper>
        <h2 className='hidden'>프로필 정보</h2>
        <S.NumberWrapper>
          <Link to='followerlist'>
            <span>{followerCount}</span>
            <span>followers</span>
          </Link>
        </S.NumberWrapper>
        <S.ProfileImg
          src={profileImg}
          alt='프로필 이미지'
          onError={handleImgError}
        />
        <S.NumberWrapper>
          <Link to='followinglist'>
            <span>{followingCount}</span>
            <span>followings</span>
          </Link>
        </S.NumberWrapper>
      </S.ProfileInfoWrapper>
      <S.UserWrapper>
        <S.UserName>{username}</S.UserName>
        <S.UserId>{accountname}</S.UserId>
        <S.UserIntro>{intro}</S.UserIntro>
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
