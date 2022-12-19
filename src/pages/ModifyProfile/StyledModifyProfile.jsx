import styled from 'styled-components';
import modifyProfileImg from '../../assets/images/upload-file.svg';
// 4~11 line 공용컴포넌트제작 필요성을 느낌
export const LayOut = styled.section`
  margin: 0 auto;
  width: 390px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormWrapp = styled.form`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  div:nth-child(n + 2) {
    width: 322px;
  }
  /* Labelinput 컴포넌트 css 논의 필요 */
`;

export const ProfileImgWrapp = styled.div`
  position: relative;
  width: 110px;
  height: 110px;
  margin-bottom: 29px;
  label {
    position: absolute;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    bottom: 0;
    right: 0;
    z-index: 20;
    cursor: pointer;
    background: no-repeat center/32px url(${modifyProfileImg});
  }
`;
