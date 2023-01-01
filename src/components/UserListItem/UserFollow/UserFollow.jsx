import ProfileImageMini from '../../../assets/images/profile-image-mini.svg';
import Button from '../../common/Button/Button';
import * as S from './StyledUserFollow';

const UserFollow = () => {
  return (
    <S.UserFollowContainer>
      <div>
        <img src={ProfileImageMini} alt='프로필이미지' />
      </div>
      <div>
        <strong>애월읍 위니브 감귤농장</strong>
        <p>@weniv_Mandarin</p>
      </div>
      <Button name='팔로우' type='button' size='s' />
    </S.UserFollowContainer>
  );
};

export default UserFollow;
