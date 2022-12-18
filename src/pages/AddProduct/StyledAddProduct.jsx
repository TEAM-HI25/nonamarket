import styled from 'styled-components';
import uploadBtnImg from '../../assets/images/img-button.svg';
// 4~11 line 공용컴포넌트제작 필요성을 느낌
export const LayOut = styled.section`
  margin: 0 auto;
  width: 390px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ProductAddText = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.2rem;
  color: #767676;
  margin-bottom: 18px;
  margin-right: auto;
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

export const ProductLoadWrapp = styled.div`
  position: relative;
  width: 322px;
  height: 204px;
  background-color: #f2f2f2;
  border-radius: 10px;
  margin-bottom: 30px;
  border: 0.5px solid #bdbdbd;
`;

export const ProductLabel = styled.label`
  position: absolute;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  bottom: 12px;
  right: 12px;
  z-index: 20;
  cursor: pointer;
  background: no-repeat center/32px url(${uploadBtnImg});
`;
export const ProductInput = styled.input``;
