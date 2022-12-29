import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from '../common/Button/Button';
import * as S from './StyledProfileInfo';
import YourProfileBtnWrap from '../common/Button/FollowButton';

const MyProfileBtnWrap = () => {
  const navigate = useNavigate();
  const handleMove = (e) => {
    if (e.target.innerText === '프로필 수정') {
      navigate('/modifyprofile');
    } else if (e.target.innerText === '상품 등록') {
      navigate('/addproduct');
    }
  };
  return (
    <S.BtnWrapper>
      <Button name='프로필 수정' type='button' size='m' onClick={handleMove} />
      <Button name='상품 등록' type='button' size='m' onClick={handleMove} />
    </S.BtnWrapper>
  );
};

const ProfileInfo = ({ userProfile, authAccountName }) => {
  const location = useLocation();
  const pageAccount = location.pathname.split('/')[2];
  const [followerCount, setFollowerCnt] = useState(userProfile.followerCount);
  const [followingCount, setFolloingCnt] = useState(userProfile.followingCount);

  useEffect(() => {
    setFollowerCnt(userProfile.followerCount);
    setFolloingCnt(userProfile.followingCount);
  }, [userProfile.isfollow]);
  // console.log(userProfile.followingCount);
  return (
    <S.Container>
      <S.ProfileInfoWrapper>
        <h2 className='hidden'>프로필 정보</h2>
        <S.NumberWrapper>
          <S.NumberOfFollowers>{followerCount}</S.NumberOfFollowers>
          <span>followers</span>
        </S.NumberWrapper>
        <S.ProfileImg src={userProfile.image} alt='프로필 이미지' />
        <S.NumberWrapper>
          <S.NumberOfFollowings>{followingCount}</S.NumberOfFollowings>
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
        <YourProfileBtnWrap
          userProfile={userProfile}
          setFollowerCount={setFollowerCnt}
          setFolloingCount={setFolloingCnt}
        />
      )}
    </S.Container>
  );
};

export default ProfileInfo;
