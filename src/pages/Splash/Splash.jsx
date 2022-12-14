import { MainLogoWrapper, LogoImg } from './StyledSplash';
import mainLogo from '../../assets/images/main-logo.svg';

const Splash = () => {
  return (
    <MainLogoWrapper>
      <LogoImg src={mainLogo} alt='노나먹자 로고 이미지' />
    </MainLogoWrapper>
  );
};

export default Splash;
