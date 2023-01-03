import Button from '../../common/Button/Button';
import * as S from './StyledUserFollow';

const UserFollow = ({ data }) => {
  return (
    <S.UserFollowContainer>
      <div>
        <img src={data.image} alt='프로필이미지' />
      </div>
      <div>
        <strong>{data.username}</strong>
        <p>@{data.accountname}</p>
      </div>
      {!data.isfollow ? (
        <Button name='팔로우' type='button' size='s' />
      ) : (
        <Button name='언팔로우' type='button' size='s' btncolor='gray' />
      )}
    </S.UserFollowContainer>
  );
};

export default UserFollow;
