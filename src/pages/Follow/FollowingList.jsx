import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../context/context';
import UserFollow from '../../components/UserListItem/UserFollow/UserFollow';
import TabMenu from '../../components/common/TabMenu/TabMenu';
import Nav from '../../components/Nav/Nav';
import * as S from './StyledFollowerList';

const FollowingList = () => {
  const { user } = useContext(AuthContext);
  const { accountName } = useParams();
  const BASE_URL = 'https://mandarin.api.weniv.co.kr';
  const [followingList, setFollowingList] = useState([]);

  useEffect(() => {
    if (!followingList.length) {
      const getFollowerdata = async () => {
        const url = `${BASE_URL}/profile/${accountName}/following`;
        const response = await fetch(url, {
          method: `GET`,
          headers: {
            Authorization: `Bearer ${user.token}`,
            'Content-type': 'application/json',
          },
        });
        const data = await response.json();
        setFollowingList(data);
        console.log(data);
      };
      getFollowerdata();
    }
  }, []);

  return (
    <S.AllWrapp>
      <Nav type='follow' followtitle='FollowingList' />
      <S.FollowersSection>
        {followingList.map((item, index) => (
          // eslint-disable-next-line no-underscore-dangle
          <UserFollow key={item._id} data={item} index={index} />
        ))}
      </S.FollowersSection>
      <TabMenu />
    </S.AllWrapp>
  );
};

export default FollowingList;
