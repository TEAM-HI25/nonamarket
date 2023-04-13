import FollowButton from '../common/Button/FollowButton';
import * as S from './StyledProfileInfo';
import iconMessageCircle from '../../assets/images/icon-message-circle.svg';
import iconShare from '../../assets/images/icon-share.svg';

const UserProfileBtnWrapp = () => {
  return (
    <S.BtnWrapper>
      <S.Btn>
        <img src={iconMessageCircle} alt='메세지아이콘' />
      </S.Btn>
      <FollowButton />
      <S.Btn>
        <img src={iconShare} alt='공유아이콘' />
      </S.Btn>
    </S.BtnWrapper>
  );
};

export default UserProfileBtnWrapp;
