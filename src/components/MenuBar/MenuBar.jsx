import iconPostListOn from '../../assets/images/icon-post-list-on.svg';
import iconPostListOff from '../../assets/images/icon-post-list-off.svg';
import iconPostAlbumOn from '../../assets/images/icon-post-album-on.svg';
import iconPostAlbumOff from '../../assets/images/icon-post-album-off.svg';
import MenuBarWrapper from './StyledMenuBar';

const MenuBar = ({ list, onListToggle }) => {
  return (
    <MenuBarWrapper>
      <button
        type='button'
        aria-label='게시글 리스트로 보기 아이콘'
        onClick={onListToggle}
      >
        <img src={list ? iconPostListOn : iconPostListOff} alt='' />
      </button>
      <button
        type='button'
        aria-label='게시글 이미지로 보기 아이콘'
        onClick={onListToggle}
      >
        <img src={list ? iconPostAlbumOff : iconPostAlbumOn} alt='' />
      </button>
    </MenuBarWrapper>
  );
};

export default MenuBar;
