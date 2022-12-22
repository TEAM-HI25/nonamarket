import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/common/Button/Button';
import { AllWrappCss, MainWrappCss } from '../../styles/Globalstyled';

export const LoginWrapper = styled.section`
  ${AllWrappCss};
`;
export const MainWrapper = styled.section`
  ${MainWrappCss};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginTitle = styled.h1`
  margin: 30px 0 40px;
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 3rem;
`;

export const LoginBtn = styled(Button)`
  margin: 30px 0 20px;
`;

export const LoginLink = styled(Link)`
  font-size: 1.2rem;
  text-decoration: none;
  line-height: 1.5rem;
  color: #767676;
`;
