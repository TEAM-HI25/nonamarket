import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import iconHome from '../../../assets/images/icon-home.svg';
import activeIconHome from '../../../assets/images/icon-home-fill.svg';
import iconMessageCircle from '../../../assets/images/icon-message-circle.svg';
import activeIconMessageCircle from '../../../assets/images/icon-message-circle-fill.svg';
import iconEdit from '../../../assets/images/icon-edit.svg';
import iconUser from '../../../assets/images/icon-user.svg';
import activeIconUser from '../../../assets/images/icon-user-fill.svg';
import * as S from './StyledTabMenu';

const TabMenu = () => {
  const location = useLocation();
  const LoginData = useSelector((state) => state.Login.user);
  const authAccountName = LoginData.accountname;

  return (
    <S.MenuWrapper>
      {/* 홈으로 이동 */}
      <S.MenuList>
        <S.MenuNavLink
          to='/homefeed'
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          <S.MenuImg
            src={location.pathname === '/homefeed' ? activeIconHome : iconHome}
            alt='홈탭'
          />
          <p>홈</p>
        </S.MenuNavLink>
      </S.MenuList>

      {/* 채팅으로 이동 */}

      <S.MenuList>
        <S.MenuNavLink to='/chatList'>
          <S.MenuImg
            src={
              location.pathname === '/chatList'
                ? activeIconMessageCircle
                : iconMessageCircle
            }
            alt='채팅탭'
          />
          <p>채팅</p>
        </S.MenuNavLink>
      </S.MenuList>

      {/* 게시물 작성페이지로 이동 */}

      <S.MenuList>
        <S.MenuNavLink to='/uploadpost'>
          <S.MenuImg src={iconEdit} alt='게시물작성탭' />
          <p>게시물 작성</p>
        </S.MenuNavLink>
      </S.MenuList>

      {/* 로그인한 유저의 프로필 페이지로 이동 */}
      <S.MenuList>
        <S.MenuNavLink to={`/profile/${authAccountName}`}>
          <S.MenuImg
            src={
              location.pathname === `/profile/${authAccountName}` ||
              location.pathname ===
                `/profile/${authAccountName}/followinglist` ||
              location.pathname === `/profile/${authAccountName}/followerlist`
                ? activeIconUser
                : iconUser
            }
            alt='프로필탭'
          />
          <p>프로필</p>
        </S.MenuNavLink>
      </S.MenuList>
    </S.MenuWrapper>
  );
};

export default TabMenu;
