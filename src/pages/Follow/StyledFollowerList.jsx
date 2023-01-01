import styled from 'styled-components';
import { AllWrappCss } from '../../styles/Globalstyled';

export const AllWrapp = styled.section`
  ${AllWrappCss};
`;

export const FollowersSection = styled.ul`
  width: 100vw;
  flex-grow: 1;
  padding: 20px 16px 0 16px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
