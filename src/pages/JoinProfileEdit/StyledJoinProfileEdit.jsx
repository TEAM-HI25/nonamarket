import styled from 'styled-components';
import Button from '../../components/common/Button/Button';
import { AllWrappCss } from '../../styles/Globalstyled';

export const JoinPfWrap = styled.section`
  ${AllWrappCss};
  background-color: #fff;
`;

export const JoinPfTitle = styled.h1`
  margin: 30px 0 12px;
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 3rem;
`;

export const JoinPfDesc = styled.p`
  margin-bottom: 30px;
  font-size: 1.4rem;
  color: #767676;
`;

export const JoinPfBtn = styled(Button)`
  margin-top: 30px;
`;
