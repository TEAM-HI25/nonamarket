import ProfileImageMini from '../../../assets/images/profile-image-mini.svg';
import Button from '../Button/Button';
import * as S from './StyledUserFollow';

const UserFollow = () => {
  return (
    <S.UserFollowContainer>
      <img src={ProfileImageMini} alt='프로필이미지' />
      <div>
        <strong>애월읍 위니브 감귤농장</strong>
        <p>@weniv_Mandarin</p>
      </div>
      {/* 공통컴포넌트 버튼 수정되면 아래 버튼 부분 마진 추가해서 리팩토링 할 예정 */}
      <Button name='팔로우' type='button' size='s' />
    </S.UserFollowContainer>
  );
};

export default UserFollow;
