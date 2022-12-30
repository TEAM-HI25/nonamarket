import styled from 'styled-components';

const MenuBarWrapper = styled.div`
  display: flex;
  justify-content: end;
  gap: 16px;
  width: 390px;
  margin-bottom: 16px;
  border-bottom: 0.5px solid #dbdbdb;
  padding: 9px 16px;
  button {
    img {
      width: 26px;
      height: 26px;
    }
  }
`;

export default MenuBarWrapper;
