import styled from 'styled-components';

export const MenuWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: 60px;
  background: #ffffff;
  border-top: 0.5px solid #dbdbdb;
`;

export const MenuList = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 84px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 400;
  line-height: 14px;
`;

export const MenuImg = styled.img`
  width: 18px;
  height: 18px;
  margin: 14px 0 4px 0;
`;
