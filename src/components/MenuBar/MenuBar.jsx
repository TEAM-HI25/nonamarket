import iconPostListOn from '../../assets/images/icon-post-list-on.svg';
// import iconPostListOff from './../assets/images/icon-post-list-off.svg'
// import iconPostListOn from '../../assets/images/icon-post-album-on.svg';
import iconPostListOff from '../../assets/images/icon-post-album-off.svg';
import MenuBarWrapper from './StyledMenuBar';

const MenuBar = () => {
  return (
    <MenuBarWrapper>
      <img src={iconPostListOn} alt='게시글_리스트로_보기_아이콘' />
      <img src={iconPostListOff} alt='게시글_이미지로_보기_아이콘' />
    </MenuBarWrapper>
  );
};

export default MenuBar;
