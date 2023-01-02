import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/context';
import UserFollow from '../../components/UserListItem/UserFollow/UserFollow';
import TabMenu from '../../components/common/TabMenu/TabMenu';
import Nav from '../../components/Nav/Nav';
import * as S from './StyledFollowerList';

const FollowerList = () => {
  const { user } = useContext(AuthContext);
  const authAccountName = user.accountname;
  const BASE_URL = 'https://mandarin.api.weniv.co.kr';
  const [followerList, setFollowerList] = useState([]);

  useEffect(() => {
    if (!followerList.length) {
      const getFollowerdata = async () => {
        const url = `${BASE_URL}/profile/${authAccountName}/follower`;
        const response = await fetch(url, {
          method: `GET`,
          headers: {
            Authorization: `Bearer ${user.token}`,
            'Content-type': 'application/json',
          },
        });
        const data = await response.json();
        setFollowerList(data);
      };
      getFollowerdata();
    }
  }, []);
  return (
    <S.AllWrapp>
      <Nav type='follow' followtitle='FollowerList' />
      <S.FollowersSection>
        {followerList.map((item, index) => (
          <UserFollow key={item.id} data={item} index={index} />
        ))}
      </S.FollowersSection>
      <TabMenu />
    </S.AllWrapp>
  );
};

export default FollowerList;
