import styled from 'styled-components';
import Button from '../../components/common/Button/Button';
import { AllWrappCss } from '../../styles/Globalstyled';

export const JoinEmailWrapper = styled.section`
  ${AllWrappCss};
  background-color: #fff;
`;

export const JoinEmailTitle = styled.h1`
  margin: 30px 0 40px;
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 3rem;
`;

export const JoinEmailBtn = styled(Button)`
  margin-top: 30px;
`;
