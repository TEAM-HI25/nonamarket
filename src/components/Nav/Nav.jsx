import { useNavigate } from 'react-router-dom';
import HomeNav from './HomeNav';
import SearchNav from './SearchNav';
import MainNav from './MainNav';
import UploadNav from './UploadNav';
import ChatNav from './ChatNav';
import FollowHeader from './FollowHeader';
import { HeaderWrapp } from './StyledNav';

const Nav = ({
  type,
  btnName,
  state,
  handle,
  disabled,
  followtitle,
  onClick,
  name,
}) => {
  const navigate = useNavigate();
  const handleReturn = () => {
    navigate(-1);
  };

  const NAV = {
    home: <HomeNav handleReturn={handleReturn} />,
    search: <SearchNav state={state} handle={handle} />,
    main: <MainNav />,
    upload: (
      <UploadNav
        btnName={btnName}
        disabled={disabled}
        handleReturn={handleReturn}
        onClick={onClick}
      />
    ),
    chat: <ChatNav handleReturn={handleReturn} name={name} />,
    follow: (
      <FollowHeader handleReturn={handleReturn} followtitle={followtitle} />
    ),
  };

  return <HeaderWrapp>{NAV[type]}</HeaderWrapp>;
};

export default Nav;
