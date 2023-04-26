import { useLocation } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import { ProfileDataContext } from '../../../context/ProfileInfoContext';
import Button from './Button';
import followAPI from '../../../api/followAPI';

const FollowButton = () => {
  const location = useLocation();
  const pageAccount = location.pathname.split('/')[2];
  const { profile, dispatch } = useContext(ProfileDataContext);
  const [isFollow, setIsFollow] = useState(profile.isfollow);

  useEffect(() => {
    setIsFollow(profile.isfollow);
  }, [profile.isfollow]);

  const handelIsFollow = async () => {
    if (isFollow === false) {
      const data = await followAPI.followingPost(pageAccount);
      setIsFollow(data.profile.isfollow);
      const FollowData = { ...data.profile };
      dispatch({
        type: 'FOLLOW_COUNT',
        payload: FollowData.followerCount,
      });
    } else if (isFollow === true) {
      const data = await followAPI.unfollowingPost(pageAccount);
      const FollowData = { ...data.profile };
      setIsFollow(data.profile.isfollow);
      dispatch({
        type: 'FOLLOW_COUNT',
        payload: FollowData.followerCount,
      });
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
