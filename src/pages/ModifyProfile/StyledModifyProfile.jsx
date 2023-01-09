import styled from 'styled-components';
import modifyProfileImg from '../../assets/images/upload-file.svg';
import { AllWrappCss, MainWrappCss } from '../../styles/Globalstyled';
// 4~11 line 공용컴포넌트제작 필요성을 느낌

export const AllWrapp = styled.form`
  ${AllWrappCss};
`;

export const FormWrapp = styled.section`
  ${MainWrappCss};
  display: flex;
  flex-direction: column;
  align-items: center;
  div:nth-child(n + 2) {
    width: 322px;
  }
  /* Labelinput 컴포넌트 css 논의 필요 */
`;

export const ProfileImgWrapp = styled.div`
  position: relative;
  width: 110px;
  height: 110px;
  margin: 30px 0;
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
