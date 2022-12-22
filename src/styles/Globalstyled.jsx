import { createGlobalStyle, css } from 'styled-components';
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
    background-color: #e8e8e8;
    /* 배경과 구분하려고 색 넣었습니다. */
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

// 전체를 감싸는 컨테이너 박스에 들어가야 하는 공통 css
export const AllWrappCss = css`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// main contents에 들어가야 하는 공통 css
export const MainWrappCss = css`
  min-width: 390px;
  flex-grow: 1;
  background-color: #fff; // 삭제될 수 있음.
`;

export default GlobalStyled;
