import { useLocation } from 'react-router-dom';
import { useState, useContext } from 'react';
import Button from './Button';
import { AuthContext } from '../../../context/context';
import { UserContext } from '../../../context/userContext';

const FollowButton = () => {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const { profile, dispatch } = useContext(UserContext);
  const [isFollow, setIsFollow] = useState(profile.isfollow);
  const pageAccount = location.pathname.split('/')[2];
  const BASE_URL = 'https://mandarin.api.weniv.co.kr';

  const handelIsFollow = () => {
    if (isFollow === false) {
      const followingPost = async () => {
        const url = `${BASE_URL}/profile/${pageAccount}/follow`;
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${user.token}`,
            'Content-type': 'application/json',
          },
        });
        const data = await response.json();
        setIsFollow(data.profile.isfollow);
        const FollowCount = { ...data.profile };
        console.log(FollowCount.followerCount);
        dispatch({
          type: 'followerCount',
          payload: FollowCount.followerCount,
        });
      };
      followingPost();
    } else if (isFollow === true) {
      const unfollowingPost = async () => {
        const url = `${BASE_URL}/profile/${pageAccount}/unfollow`;
        const response = await fetch(url, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${user.token}`,
            'Content-type': 'application/json',
          },
        });
        const data = await response.json();
        setIsFollow(data.profile.isfollow);
        const FollowCount = { ...data.profile };
        console.log(FollowCount.followerCount);
        dispatch({
          type: 'followerCount',
          payload: FollowCount.followerCount,
        });
      };
      unfollowingPost();
    }
  };
  return !isFollow ? (
    <Button name='팔로우' type='button' size='m' onClick={handelIsFollow} />
  ) : (
    <Button
      name='언팔로우'
      type='button'
      size='m'
      btncolor='gray'
      onClick={handelIsFollow}
    />
  );
};

export default FollowButton;
