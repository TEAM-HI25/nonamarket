import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyled = createGlobalStyle`
@font-face {
    font-family: 'Spoqa Han Sans Neo';
    src: url('../../assets/font/SpoqaHanSansNeo-Light.woff2') format('woff2'),
        url('../../assets/font/SpoqaHanSansNeo-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: 'Spoqa Han Sans Neo';
    src: url('../../assets/font/SpoqaHanSansNeo-Medium.woff2') format('woff2'),
        url('../../assets/font/SpoqaHanSansNeo-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: 'Spoqa Han Sans Neo';
    src: url('../../assets/font/SpoqaHanSansNeo-Bold.woff2') format('woff2'),
        url('../../assets/font/SpoqaHanSansNeo-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: 'Spoqa Han Sans Neo';
    src: url('../../assets/font/SpoqaHanSansNeo-Regular.woff2') format('woff2'),
        url('../../assets/font/SpoqaHanSansNeo-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: 'Spoqa Han Sans Neo';
    src: url('../../assets/font/SpoqaHanSansNeo-Thin.woff2') format('woff2'),
        url('../../assets/font/SpoqaHanSansNeo-Thin.woff') format('woff');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
}
  ${reset}
  html {
    font-size: 10px;
  }
  
  *{
    font-family: "Spoqa Han Sans Neo", sans-serif;
    font-weight: 400;
    box-sizing: border-box;
  }
  
  button{
    background: inherit;
    border:none;
    box-shadow:none;
    border-radius:0;
    padding:0;
    overflow:visible;
    cursor:pointer
    
  }
  .hidden {
    position: relative;
    z-index: -1px;
    display: inline-block;
    overflow: hidden;
    width: 1px;
    height: 1px;
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    word-break: initial;
    word-wrap: initial;
  }
`;

export default GlobalStyled;
