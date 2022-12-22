import HomeNav from './HomeHeader';
import SearchNav from './SearchHeader';
import MainNav from './MainHeader';
import UploadNav from './UploadHeader';
import ChatNav from './ChatHeader';
import FollowHeader from './FollowHeader';
import { HeaderWrapp } from './StyledHeader';

const Nav = ({ type, btnName }) => {
  const NAV = {
    home: <HomeNav />,
    search: <SearchNav />,
    main: <MainNav />,
    upload: <UploadNav btnName={btnName} />,
    chat: <ChatNav />,
    follow: <FollowHeader />,
  };

  return <HeaderWrapp>{NAV[type]}</HeaderWrapp>;
};

export default Nav;
