import { useState } from 'react';
import Button from '../../common/Button/Button';
import * as S from './StyledUserFollow';
import followAPI from '../../../api/followAPI';

const UserFollow = ({ data }) => {
  const [isFollow, setIsFollow] = useState(data.isfollow);

  const handelIsFollow = () => {
    if (isFollow === false) {
      const followingPost = async () => {
        const isFollowData = await followAPI.followingPost(data.accountname);
        setIsFollow(isFollowData.profile.isfollow);
      };
      followingPost();
    } else if (isFollow === true) {
      const unFollowingPost = async () => {
        const unFollowData = await followAPI.unfollowingPost(data.accountname);
        setIsFollow(unFollowData.profile.isfollow);
      };
      unFollowingPost();
    }
  };
  let imageData = data.image;
  if (imageData.includes('mandarin.api')) {
    imageData = imageData.replace('mandarin.api', 'api.mandarin');
  }
  return (
    <S.UserFollowContainer>
      <div>
        <img src={imageData} alt='프로필이미지' />
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
