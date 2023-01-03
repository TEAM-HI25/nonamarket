import { useState, useContext } from 'react';
import Button from '../../common/Button/Button';
import * as S from './StyledUserFollow';
import { AuthContext } from '../../../context/context';

const UserFollow = ({ data }) => {
  const [isFollow, setIsFollow] = useState(data.isfollow);
  const { user } = useContext(AuthContext);
  const BASE_URL = 'https://mandarin.api.weniv.co.kr';

  const handelIsFollow = () => {
    if (isFollow === false) {
      const followingPost = async () => {
        const url = `${BASE_URL}/profile/${data.accountname}/follow`;
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${user.token}`,
            'Content-type': 'application/json',
          },
        });
        const followData = await response.json();
        setIsFollow(followData.profile.isfollow);
      };
      followingPost();
    } else if (isFollow === true) {
      const unfollowingPost = async () => {
        const url = `${BASE_URL}/profile/${data.accountname}/unfollow`;
        const response = await fetch(url, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${user.token}`,
            'Content-type': 'application/json',
          },
        });
        const followData = await response.json();
        setIsFollow(followData.profile.isfollow);
      };
      unfollowingPost();
    }
  };
  return (
    <S.UserFollowContainer>
      <div>
        <img src={data.image} alt='프로필이미지' />
      </div>
      <div>
        <strong>{data.username}</strong>
        <p>@{data.accountname}</p>
      </div>
      {!isFollow ? (
        <Button name='팔로우' type='button' size='s' onClick={handelIsFollow} />
      ) : (
        <Button
          name='언팔로우'
          type='button'
          size='s'
          btncolor='gray'
          onClick={handelIsFollow}
        />
      )}
    </S.UserFollowContainer>
  );
};

export default UserFollow;
