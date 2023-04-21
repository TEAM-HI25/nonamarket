import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import ProfileImg from '../../assets/images/profile-image-mini.svg';
import * as S from './StyledChatRoom';

const ChatRoom = () => {
  const location = useLocation();
  // const name = location.state.name;
  // const desc = location.state.desc;
  const [chatMsg, setChatMsg] = useState('');
  const [isValid, setIsValid] = useState(true);

  // 1. input창에 글씨 보이기
  const handleData = (e) => {
    setChatMsg(e.target.value);
  };

  // 2. 1글자 이상이면 버튼 활성화
  const handleCheckValid = () => {
    return chatMsg.length > 0 ? setIsValid(false) : setIsValid(true);
  };

  return (
    <S.LayOut>
      <Nav type='chat' name={location.state.name} />
      <S.OtherUserChatBox>
        <S.UserprofileImg src={ProfileImg} alt='유저 프로필 이미지' />
        <S.OtherUserChatMsg>{location.state.desc}</S.OtherUserChatMsg>
        <S.TimeMsg>12:39</S.TimeMsg>
      </S.OtherUserChatBox>
      <S.InputBox>
        <S.ImgLabel htmlFor='이미지업로드' />
        <input className='hidden' type='file' id='이미지업로드' />
        <label htmlFor='chat' className='hidden'>
          채팅창
        </label>
        <S.MsgInput
          id='chat'
          placeholder='메시지 입력하기'
          value={chatMsg}
          onChange={handleData}
          onKeyUp={handleCheckValid}
        />
        <S.ChatUploadBtn type='button' disabled={isValid}>
          전송
        </S.ChatUploadBtn>
      </S.InputBox>
    </S.LayOut>
  );
};

export default ChatRoom;
