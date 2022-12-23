import { useNavigate } from 'react-router-dom';
import HomeNav from './HomeNav';
import SearchNav from './SearchNav';
import MainNav from './MainNav';
import UploadNav from './UploadNav';
import ChatNav from './ChatNav';
import FollowHeader from './FollowHeader';
import { HeaderWrapp } from './StyledNav';

const Nav = ({ type, btnName, state, handle }) => {
  const navigate = useNavigate();
  const handleReturn = () => {
    navigate(-1);
  };
  const NAV = {
    home: <HomeNav handleReturn={handleReturn} />,
    search: <SearchNav state={state} handle={handle} />,
    main: <MainNav />,
    upload: <UploadNav btnName={btnName} handleReturn={handleReturn} />,
    chat: <ChatNav handleReturn={handleReturn} />,
    follow: <FollowHeader handleReturn={handleReturn} />,
  };

  return <HeaderWrapp>{NAV[type]}</HeaderWrapp>;
};

export default Nav;
