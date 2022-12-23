import { useLocation } from 'react-router-dom';
import Button from '../common/Button/Button';
import profileImg from '../../assets/images/profile-image.svg';
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

const ProfileInfo = () => {
  const location = useLocation();
  console.log(location);
  return (
    <S.Container>
      <S.ProfileInfoWrapper>
        <h2 className='hidden'>프로필 정보</h2>
        <S.NumberWrapper>
          <S.NumberOfFollowers>2950</S.NumberOfFollowers>
          <span>followers</span>
        </S.NumberWrapper>
        <S.ProfileImg src={profileImg} alt='프로필 이미지' />
        <S.NumberWrapper>
          <S.NumberOfFollowings>128</S.NumberOfFollowings>
          <span>followings</span>
        </S.NumberWrapper>
      </S.ProfileInfoWrapper>
      <S.UserWrapper>
        <S.UserName>애월읍 위니브 감귤농장</S.UserName>
        <S.UserId>@weniv_Mandarin</S.UserId>
        <S.UserDescription>
          감귤 전국 배송, 귤따기 체험, 감귤 농장
        </S.UserDescription>
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
