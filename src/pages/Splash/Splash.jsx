import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainLogoWrapper, LogoImg } from './StyledSplash';
import mainLogo from '../../assets/images/main-logo.svg';
import { AuthContext } from '../../context/context';

const Splash = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    setTimeout(() => {
      if (user.token == null) {
        navigate('/login');
      } else if (user.token !== null) {
        navigate('/homefeed');
      }
    }, 1200);
  }, []);

  return (
    <MainLogoWrapper>
      <LogoImg src={mainLogo} alt='노나먹자 로고 이미지' />
    </MainLogoWrapper>
  );
};

export default Splash;
