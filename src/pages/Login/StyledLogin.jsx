import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import kakao from '../../assets/images/icon-message-circle-fill.svg';
import facebook from '../../assets/images/facebook.svg';
import google from '../../assets/images/google.svg';

export const LoginBtn = styled.button`
  display: block;
  position: relative;
  width: 100%;
  padding: 12px 0px;
  ${(props) => props.logintype === 'kakao' && `border : 1px solid #f2c94c;`}
  ${(props) => props.logintype === 'google' && `border : 1px solid #767676;`}
  ${(props) => props.logintype === 'facebook' && `border : 1px solid #2D9CDB;`}
  border-radius: 44px;
  font-size: 1.4rem;
  color: #767676;
  &::before {
    content: '';
    position: absolute;
    left: 17px;
    width: 18px;
    height: 18px;
    ${(props) =>
      props.logintype === 'kakao' && `background-image: url(${kakao});`}
    ${(props) =>
      props.logintype === 'google' && `background-image: url(${google});`}
    ${(props) =>
      props.logintype === 'facebook' && `background-image: url(${facebook});`}
    background-size: contain;
  }
  & + button {
    margin-top: 10px;
  }
`;

export const LoginWrap = styled.section`
  display: flex;
  justify-content: center;
  position: relative;
  height: 100vh;
  background-color: #f5c045;
  overflow-y: hidden;
`;

export const WhiteLogo = styled.img`
  width: 189px;
  height: 133px;
  margin-top: 184px;
`;

const slideAnimation = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0%);
  }
`;

export const ModalWrap = styled.article`
  position: absolute;
  bottom: 0px;
  width: 100%;
  padding: 50px 34px 70px;
  border-radius: 20px 20px 0 0 / 20px 20px 0 0;
  background-color: #f7f7f7;
  animation: ${slideAnimation} 0.8s;
`;

export const LinkWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const JoinLink = styled(Link)`
  font-size: 1.2rem;
  text-decoration: none;
  color: #767676;
  & + a::before {
    content: '';
    display: inline-block;
    width: 1px;
    height: 12px;
    margin: 0 12px;
    vertical-align: -1px;
    background-color: #c4c4c4;
  }
`;
