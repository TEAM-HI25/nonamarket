import styled from 'styled-components';

export const PostModalWrap = styled.article`
  width: 100%;
  height: 100vh;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const PostModalBtnWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  bottom: 0;
  padding: 36px 0 10px 26px;
  border-radius: 10px 10px 0 0;
  background-color: #fff;

  &::before {
    content: '';
    position: absolute;
    top: 16px;
    left: 50%;
    width: 50px;
    height: 4px;
    background-color: #dbdbdb;
  }
`;
