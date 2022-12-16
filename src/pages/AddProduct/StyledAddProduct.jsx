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
export const ProductAddText = styled.div`
  font-size: 1rem;
  font-weight: 400;
  color: #767676;
  margin-bottom: 18px;
`;
export const FormWrapp = styled.form`
  flex-grow: 1;
  margin-top: 30px;
`;

export const ProductLoadWrapp = styled.div`
  position: relative;
  width: 322px;
  height: 204px;
  background-color: #f2f2f2;
  border-radius: 10px;
  margin-bottom: 30px;
  border: 0.5px solid #bdbdbd;
  label {
    position: absolute;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    bottom: 12px;
    right: 12px;
    z-index: 20;
    cursor: pointer;
    background: no-repeat center/32px url(${uploadBtnImg});
  }
`;

// 공통 컴포넌트로 label,input 생성하여 교체해야함. (46~57 line)
export const LabelInputWrapp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid #bdbdbd;
  input {
    border: none;
    padding: 0;
  }
`;

export const Label = styled.label`
  /* width: 322px; //삭제 예정 */
`;
