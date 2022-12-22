import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MenuWrapper = styled.ul`
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  background: #ffffff;
  border-top: 0.5px solid #dbdbdb;
`;

export const MenuList = styled.li`
  width: 84px;
  text-align: center;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 400;
  line-height: 14px;
`;

export const MenuNavLink = styled(NavLink)`
  color: var(-----sub-text-color);
  font-size: 1rem;
  line-height: 1.4rem;

  &.active {
    color: var(--main-color);
  }
`;

export const MenuImg = styled.img`
  width: 18px;
  height: 18px;
  margin: 14px 0 4px 0;
`;
