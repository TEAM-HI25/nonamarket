import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import { AuthContext } from '../../context/context';
import Button from '../common/Button/Button';
// import FollowButton from '../common/Button/FollowButton';
// import iconMessageCircle from '../../assets/images/icon-message-circle.svg';
// import iconShare from '../../assets/images/icon-share.svg';
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

const ProfileInfo = ({ userProfile, authAccountName, isFollow }) => {
  const location = useLocation();
  const pageAccount = location.pathname.split('/')[2];
  const [followBtnValid, setFollowBtnValid] = useState(Boolean);
  const [followBtnName, setFollowBtnName] = useState('');

  useEffect(() => {
    if (!isFollow) {
      setFollowBtnValid(false);
      setFollowBtnName('팔로우');
    } else if (isFollow) {
      setFollowBtnValid(true);
      setFollowBtnName('언팔로우');
    }
  }, [isFollow]);

  return (
    <S.Container>
      {isFollow ? (
        <S.ProfileInfoWrapper>
          <h2 className='hidden'>프로필 정보</h2>
          <S.NumberWrapper>
            <S.NumberOfFollowers>
              {userProfile.followerCount}
            </S.NumberOfFollowers>
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
      ) : (
        <p>로딩중..</p>
      )}
      <S.UserWrapper>
        <S.UserName>{userProfile.username}</S.UserName>
        <S.UserId>{userProfile.accountname}</S.UserId>
        <S.UserIntro>{userProfile.userintro}</S.UserIntro>
      </S.UserWrapper>
      {pageAccount === authAccountName ? (
        <MyProfileBtnWrap />
      ) : (
        <YourProfileBtnWrap
          followBtnValid={followBtnValid}
          followBtnName={followBtnName}
        />
      )}
    </S.Container>
  );
};

export default ProfileInfo;
