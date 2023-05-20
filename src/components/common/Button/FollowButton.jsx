import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { followCount } from '../../../redux/module/ProfileDataSlice';
import Button from './Button';
import followAPI from '../../../api/followAPI';

const FollowButton = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const ProfileData = useSelector((state) => state.Profile.profile);
  const pageAccount = location.pathname.split('/')[2];
  const [isFollow, setIsFollow] = useState(ProfileData.isfollow);

  useEffect(() => {
    setIsFollow(ProfileData.isfollow);
  }, [ProfileData.isfollow]);

  const handelIsFollow = async () => {
    if (isFollow === false) {
      const data = await followAPI.followingPost(pageAccount);
      setIsFollow(data.profile.isfollow);
      const FollowData = { ...data.profile };
      dispatch(followCount(FollowData.followerCount));
    } else if (isFollow === true) {
      const data = await followAPI.unfollowingPost(pageAccount);
      const FollowData = { ...data.profile };
      setIsFollow(data.profile.isfollow);
      dispatch(followCount(FollowData.followerCount));
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
