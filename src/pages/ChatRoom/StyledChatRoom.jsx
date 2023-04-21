import styled from 'styled-components';
import uploadBtnImg from '../../assets/images/img-button.svg';
import { AllWrappCss } from '../../styles/Globalstyled';

export const LayOut = styled.div`
  ${AllWrappCss}
  align-items: flex-start;
  background-color: #f2f2f2;
`;
export const OtherUserChatBox = styled.div`
  display: flex;
  margin: 1.6rem;
`;
export const UserprofileImg = styled.img`
  width: 4.2rem;
  height: 4.2rem;
  border-radius: 50%;
  object-fit: cover;
`;
export const OtherUserChatMsg = styled.p`
  margin: 0 0 0 1.2rem;
  padding: 1.2rem;
  background: #fff;
  border: 1px solid #c4c4c4;
  border-radius: 0px 1rem 1rem;
`;
export const TimeMsg = styled.span`
  align-self: end;
  margin-left: 0.6rem;
  font-size: 1rem;
  line-height: 1.2rem;
  color: #767676;
`;
export const InputBox = styled.form`
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  gap: 1.8rem;
  padding: 1.2rem 1.6rem;
  background: #fff;
  border-top: 0.5px solid #dbdbdb;
`;
export const ImgLabel = styled.label`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  background: no-repeat center/32px url(${uploadBtnImg});
`;
export const MsgInput = styled.input`
  padding: 0 1rem;
  width: 100%;
  border: none;
  font-size: 1.4rem;
  &::placeholder {
    color: #c4c4c4;
    font-size: 1.4rem;
    font-family: 'Spoqa Han Sans Neo', sans-serif;
  }
`;

export const ChatUploadBtn = styled.button`
  color: #f26e22;
  font-size: 1.4rem;
  line-height: 1.753rem;
  font-weight: 500;
  white-space: nowrap;
  :disabled {
    pointer-events: none;
    color: #c4c4c4;
  }
`;
