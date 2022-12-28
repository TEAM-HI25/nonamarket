import styled, { keyframes } from 'styled-components';

export const SlideIn = keyframes`
    from {
        transform: translateY(100%);
    }
    to {
        transform: translateY(0%);
    }
`;

export const CommentModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(68, 68, 68, 0.193);
  display: flex;
  align-items: flex-end;
`;

export const ModalBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 25px 25px 0 0;
  padding: 36px 0px 10px 0px;
  position: absolute;
  bottom: 0;
  z-index: 999;
  background-color: white;
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

export const ModalBtn = styled.button`
  padding: 14px 26px;
  text-align: left;
`;
