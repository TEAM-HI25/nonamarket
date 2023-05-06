import { useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import * as S from './StyledProfileInfo';
import UserProfileBtnWrap from './UserProfileBtnWrapp';
import MyProfileBtnWrap from './MyProfileBtnWrapp';

const ProfileInfo = ({ authAccountName }) => {
  const location = useLocation();
  const pageAccount = location.pathname.split('/')[2];
  const ProfileData = useSelector((state) => state.Profile.profile);

  const { followerCount, image, followingCount, username, accountname, intro } =
    ProfileData;

  // API 서버 변경으로 인한 임시 image 데이터 처리
  let profileImg = image;
  if (profileImg.includes('mandarin.api')) {
    profileImg = profileImg.replace('mandarin.api', 'api.mandarin');
  }

  return (
    <S.Container>
      <S.ProfileInfoWrapper>
        <h2 className='hidden'>프로필 정보</h2>
        <S.NumberWrapper>
          <Link to='followerlist'>
            <span>{followerCount}</span>
            <span>followers</span>
          </Link>
        </S.NumberWrapper>
        <S.ProfileImg src={profileImg} alt='프로필 이미지' />
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
  );
};

export default ProfileInfo;
