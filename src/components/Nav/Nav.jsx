import HomeNav from './HomeNav';
import SearchNav from './SearchNav';
import MainNav from './MainNav';
import UploadNav from './UploadNav';
import ChatNav from './ChatNav';
import { NavWrapp } from './StyledNav';

const Nav = ({ type, btnName, disabled }) => {
  const NAV = {
    home: <HomeNav />,
    search: <SearchNav />,
    main: <MainNav />,
    upload: <UploadNav btnName={btnName} disabled={disabled} />,
    chat: <ChatNav />,
  };

  return <NavWrapp>{NAV[type]}</NavWrapp>;
};

export default Nav;
