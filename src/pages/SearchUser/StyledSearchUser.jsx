import styled from 'styled-components';
import { AllWrappCss } from '../../styles/Globalstyled';

export const LayOut = styled.section`
  ${AllWrappCss}
  width: 100%;
  align-items: flex-start;
  background-color: #fff;
`;

export const Main = styled.main`
  flex-grow: 1;
  margin-top: 20px;
  margin-left: 16px;
`;

export const ResultListWrapp = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
