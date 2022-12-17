import * as S from './StyledTabMenu';
import iconHome from '../../../assets/images/icon-home.svg';
import iconMessageCircle from '../../../assets/images/icon-message-circle.svg';
import iconEdit from '../../../assets/images/icon-edit.svg';
import iconUser from '../../../assets/images/icon-user.svg';

const TabMenu = () => {
  return (
    <S.MenuWrapper>
      <S.MenuList>
        <S.MenuImg src={iconHome} alt='홈탭' />
        <p>홈</p>
      </S.MenuList>
      <S.MenuList>
        <S.MenuImg src={iconMessageCircle} alt='채팅탭' />
        <p>채팅</p>
      </S.MenuList>
      <S.MenuList>
        <S.MenuImg src={iconEdit} alt='게시물작성탭' />
        <p>게시물 작성</p>
      </S.MenuList>
      <S.MenuList>
        <S.MenuImg src={iconUser} alt='프로필탭' />
        <p>프로필</p>
      </S.MenuList>
    </S.MenuWrapper>
  );
};

export default TabMenu;
