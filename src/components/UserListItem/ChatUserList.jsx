import { Link } from 'react-router-dom';
import ProfileImg from '../../assets/images/profile-image-mini.svg';
import * as S from './StyledUserListItem';

const ChatUserList = ({ name, desc }) => {
  return (
    <S.ResultList>
      <Link to='/chatroom'>
        <div>
          <S.UserprofileImg src={ProfileImg} alt='유저 프로필 이미지' />
        </div>
        <div>
          <S.UserName>{name}</S.UserName>
          <S.UserId>{desc}</S.UserId>
        </div>
        <S.ChatDate>2023.01.04</S.ChatDate>
      </Link>
    </S.ResultList>
  );
};

export default ChatUserList;
