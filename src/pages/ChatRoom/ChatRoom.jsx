// import { useState } from 'react';
import Nav from '../../components/Nav/Nav';
import ProfileImg from '../../assets/images/profile-image-mini.svg';
import * as S from './StyledChatRoom';

const ChatRoom = () => {
  return (
    <S.LayOut>
      <Nav type='chat' />
      <S.OtherUserChatBox>
        <S.UserprofileImg src={ProfileImg} alt='유저 프로필 이미지' />
        <S.OtherUserChatMsg>안녕하세요</S.OtherUserChatMsg>
        <S.TimeMsg>12:39</S.TimeMsg>
      </S.OtherUserChatBox>
      <S.InputBox>
        <S.ImgLabel htmlFor='이미지업로드' />
        <input className='hidden' type='file' id='이미지업로드' />
        <label htmlFor='chat' className='hidden'>
          채팅창
        </label>
        <S.MsgInput id='chat' placeholder='메시지 입력하기' />
        <S.ChatUploadBtn type='submit'>전송</S.ChatUploadBtn>
      </S.InputBox>
    </S.LayOut>
  );
};

export default ChatRoom;
