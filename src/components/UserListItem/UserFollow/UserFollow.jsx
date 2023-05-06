import { useSelector } from 'react-redux';
import { useState } from 'react';
import BASE_URL from '../../../utils/baseUrl';
import Button from '../../common/Button/Button';
import * as S from './StyledUserFollow';

const UserFollow = ({ data }) => {
  const [isFollow, setIsFollow] = useState(data.isfollow);
  const LoginData = useSelector((state) => state.Login.user);

  const handelIsFollow = () => {
    if (isFollow === false) {
      const followingPost = async () => {
        const url = `${BASE_URL}/profile/${data.accountname}/follow`;
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${LoginData.token}`,
            'Content-type': 'application/json',
          },
        });
        const followData = await response.json();
        console.log(followData);
        setIsFollow(followData.profile.isfollow);
      };
      followingPost();
    } else if (isFollow === true) {
      const unfollowingPost = async () => {
        const url = `${BASE_URL}/profile/${data.accountname}/unfollow`;
        const response = await fetch(url, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${LoginData.token}`,
            'Content-type': 'application/json',
          },
        });
        const followData = await response.json();
        console.log(followData);
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
