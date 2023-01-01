import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 20;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const ModalContainer = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  padding: 36px 0 10px;
`;

export const ModalBar = styled.span`
  position: absolute;
  width: 50px;
  height: 4px;
  background-color: #dbdbdb;
  border-radius: 5px;
  top: 16px;
  left: 50%;
  transform: translate(-50%);
`;

export const ModalList = styled.li`
  padding: 14px 26px;
  font-size: 1.4rem;
  line-height: 1.8rem;

  & > button {
    cursor: pointer;
    display: block;
    text-align: left;
    width: 100%;
  }
`;