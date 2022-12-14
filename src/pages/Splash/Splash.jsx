import { MainLogoWrapper, LogoImg } from './StyledSplash';
import mainLogo from '../../assets/images/main-logo.svg';

const Splash = () => {
  return (
    <MainLogoWrapper>
      <LogoImg alt='노나먹자 로고 이미지' src={mainLogo} />
    </MainLogoWrapper>
  );
};

export default Splash;
