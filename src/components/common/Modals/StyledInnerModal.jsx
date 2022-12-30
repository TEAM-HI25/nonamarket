import styled from 'styled-components';

export const InnerModalContainer = styled.article`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const InnerModalWrap = styled.div`
  width: 252px;
  border-radius: 10px;
  text-align: center;
  background-color: #fff;

  p {
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2rem;
    padding: 22px 0px;
    border-bottom: 1px solid #dbdbdb;
  }
`;

export const InnerModalBtnWrap = styled.div`
  display: flex;
  button {
    width: 100%;
    padding: 14px 0px;
    font-size: 1.4rem;
    font-weight: 400;
  }

  button:nth-child(1) {
    border-right: 1px solid #dbdbdb;
  }

  button:nth-child(2) {
    color: #f26e22;
  }
`;
