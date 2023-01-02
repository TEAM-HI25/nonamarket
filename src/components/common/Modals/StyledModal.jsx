import styled, { keyframes } from 'styled-components';

export const SlideIn = keyframes`
    from {
        transform: translateY(100%);
    }
    to {
        transform: translateY(0%);
    }
`;

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
  border-radius: 12px 12px 0 0;
  background-color: #fff;
  animation: ${SlideIn} 0.2s linear;

  &::before {
    display: inline-block;
    content: '';
    width: 50px;
    height: 4px;
    background-color: #c4c4c4;
    border-radius: 5px;
    position: absolute;
    left: 50%;
    top: 16px;
    transform: translateX(-50%);
  }
`;
