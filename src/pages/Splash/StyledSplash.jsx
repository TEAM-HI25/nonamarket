import styled, { keyframes } from 'styled-components';

const logoAnimation = keyframes`
    0%{
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const logo2Animation = keyframes`
    0%{
        opacity: 0;
        transform:scale(0.8);
    }
    100% {
        opacity: 1;
    }
`;

const Body = styled.body`
  background: #fff;
`;
const MainLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-color: #fff;
  animation: ${logoAnimation} 0.7s ease-out;
`;

const LogoImg = styled.img`
  width: 237px;
  animation: ${logo2Animation} 0.7s ease-out;
`;

export { Body, MainLogoWrapper, LogoImg };
