import { Link } from 'react-router-dom';
import ProfileImg from '../../assets/images/profile-image-mini.svg';
import * as S from './StyledUserListItem';

const ChatUserList = ({ name, desc, time, chatid }) => {
  return (
    <S.ResultList>
      <Link to={`/chatroom/${chatid}`} state={{ name, desc }}>
        <div>
          <S.UserprofileImg src={ProfileImg} alt='유저 프로필 이미지' />
        </div>
        <S.UserBox>
          <S.UserName>{name}</S.UserName>
          <S.UserId>{desc}</S.UserId>
        </S.UserBox>
        <S.ChatDate>{time}</S.ChatDate>
      </Link>
    </S.ResultList>
  );
};

export default ChatUserList;
