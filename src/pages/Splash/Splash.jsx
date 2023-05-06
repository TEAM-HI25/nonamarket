import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainLogoWrapper, LogoImg } from './StyledSplash';
import mainLogo from '../../assets/images/main-logo.svg';

const Splash = () => {
  const navigate = useNavigate();
  const LoginData = useSelector((state) => state.Login.user);

  useEffect(() => {
    setTimeout(() => {
      if (LoginData.token == null) {
        navigate('/login');
      } else if (LoginData.token !== null) {
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
