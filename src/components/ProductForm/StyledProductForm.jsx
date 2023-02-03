import styled from 'styled-components';
import uploadBtnImg from '../../assets/images/img-button.svg';
import { AllWrappCss, MainWrappCss } from '../../styles/Globalstyled';

// 4~11 line 공용컴포넌트제작 필요성을 느낌
export const AllWrapp = styled.form`
  ${AllWrappCss};
`;
export const MainWrapp = styled.section`
  ${MainWrappCss};
`;
export const InputWrapp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  div:nth-child(n + 2) {
    width: 322px;
  }
`;

export const ProductAddText = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.2rem;
  color: #767676;
  margin: 0 auto 18px 0;
  padding: 0 34px;
`;

export const ProductLoadWrapp = styled.div`
  position: relative;
  width: 322px;
  height: 204px;
  background-color: #f2f2f2;
  border-radius: 10px;
  margin-bottom: 30px;
  border: 0.5px solid #bdbdbd;

  & > img {
    width: 322px;
    height: 204px;
    border-radius: 10px;
    margin-bottom: 30px;
    border: 0.5px solid #bdbdbd;
    object-fit: cover;
  }
`;

export const ProductLabel = styled.label`
  position: absolute;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  bottom: 12px;
  right: 12px;
  z-index: 10;
  cursor: pointer;
  background: no-repeat center/32px url(${uploadBtnImg});
`;
export const ProductInput = styled.input``;
