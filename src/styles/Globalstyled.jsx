import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyled = createGlobalStyle`
  ${reset}
  :root {
    --main-color:#f5c045;
    --main-disabled-color:#c8beab;
    --main-text-color:#ffffff;
    --sub-text-color:#767676;
    --border-color:#bdbdbd;
  }
  html {
    font-size: 10px;
  }

  body {
    font-family: "Spoqa Han Sans Neo", sans-serif;
    font-weight: 400;
  }

  * {
    box-sizing: border-box;
  }
  
  button{
    background: inherit;
    border:none;
    box-shadow:none;
    border-radius:0;
    padding:0;
    overflow:visible;
    cursor:pointer;
    font: inherit;
    
  }
  .hidden {
    position: absolute;
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
`;

export default GlobalStyled;
