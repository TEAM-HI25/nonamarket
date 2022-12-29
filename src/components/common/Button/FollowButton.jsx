import { useLocation } from 'react-router-dom';
import { useState, useContext } from 'react';
import Button from './Button';
import { AuthContext } from '../../../context/context';
import * as S from './StyledProfileInfo';
import iconMessageCircle from '../../../assets/images/icon-message-circle.svg';
import iconShare from '../../../assets/images/icon-share.svg';

const FollowButton = ({ followBtnName }) => {
  const location = useLocation();
  const [isFollow, setIsFollow] = useState(Boolean);
  //   const [followBtnValid, setFollowBtnValid] = useState(Boolean);
  //   const [followBtnName, setFollowBtnName] = useState('');
  const pageAccount = location.pathname.split('/')[2];
  const { user } = useContext(AuthContext);
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
        console.log(data.profile.isfollow);
      };
      console.log(pageAccount);
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
        console.log(data.profile.isfollow);
      };
      unfollowingPost();
    }
  };
  return (
    <S.BtnWrapper>
      <S.Btn>
        <img src={iconMessageCircle} alt='메세지아이콘' />
      </S.Btn>
      <Button
        name={followBtnName}
        type='button'
        size='m'
        onClick={handelIsFollow}
      />
      <S.Btn>
        <img src={iconShare} alt='공유아이콘' />
      </S.Btn>
    </S.BtnWrapper>
  );
};

export default FollowButton;
