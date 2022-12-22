import * as S from './StyledUserListItem';

const UserListItem = ({ name, account, img }) => {
  return (
    <S.ResultList>
      <div>
        <S.UserprofileImg src={img} alt='유저 프로필 이미지' />
      </div>
      <div>
        <S.UserName>{name}</S.UserName>
        <S.UserId>{account}</S.UserId>
      </div>
    </S.ResultList>
  );
};

export default UserListItem;
