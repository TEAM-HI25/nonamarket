// import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
// import { AuthContext } from '../../../context/context';
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

  // const { user } = useContext(AuthContext);

  return (
    <S.MenuWrapper>
      {/* 홈으로 이동 */}
      <S.MenuNavLink
        to='/homefeed'
        className={({ isActive }) => (isActive ? 'active' : 'inactive')}
      >
        <S.MenuList>
          <S.MenuImg
            src={location.pathname === '/homefeed' ? activeIconHome : iconHome}
            alt='홈탭'
          />
          <p>홈</p>
        </S.MenuList>
      </S.MenuNavLink>

      {/* 채팅으로 이동 */}

      <S.MenuNavLink to='/chatroom'>
        <S.MenuList>
          <S.MenuImg
            src={
              location.pathname === '/chatroom'
                ? activeIconMessageCircle
                : iconMessageCircle
            }
            alt='채팅탭'
          />
          <p>채팅</p>
        </S.MenuList>
      </S.MenuNavLink>

      {/* 게시물 작성페이지로 이동 */}

      <S.MenuNavLink to='/uploadpost'>
        <S.MenuList>
          <S.MenuImg src={iconEdit} alt='게시물작성탭' />
          <p>게시물 작성</p>
        </S.MenuList>
      </S.MenuNavLink>

      {/* 로그인한 유저의 프로필 페이지로 이동 */}
      {/* <S.MenuNavLink to={`/myprofile/${user.accountname}`}> */}
      <S.MenuNavLink to='/myprofile'>
        <S.MenuList>
          <S.MenuImg
            src={location.pathname === `/myprofile` ? activeIconUser : iconUser}
            alt='프로필탭'
          />
          {/* <S.MenuImg
            src={
              location.pathname === `/myprofile/${user.accountname}`
                ? activeIconUser
                : iconUser
            }
            alt='프로필탭'
          /> */}
          <p>프로필</p>
        </S.MenuList>
      </S.MenuNavLink>
    </S.MenuWrapper>
  );
};

export default TabMenu;
