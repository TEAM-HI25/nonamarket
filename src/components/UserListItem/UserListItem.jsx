import { Link } from 'react-router-dom';
import * as S from './StyledUserListItem';

const UserListItem = ({ name, account, img }) => {
  return (
    <S.ResultList>
      <Link to={`/Profile/${account}`}>
        <S.UserprofileImg src={img} alt='유저 프로필 이미지' />
        <div>
          <S.UserName>{name}</S.UserName>
          <S.UserId>{account}</S.UserId>
        </div>
      </Link>
    </S.ResultList>
  );
};

export default UserListItem;
