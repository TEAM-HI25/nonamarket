import HomeNav from './HomeNav';
import SearchNav from './SearchNav';
import MainNav from './MainNav';
import UploadNav from './UploadNav';
import ChatNav from './ChatNav';
import FollowHeader from './FollowHeader';
import { HeaderWrapp } from './StyledNav';

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
