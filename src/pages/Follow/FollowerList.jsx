import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import profileAPI from '../../api/profileAPI';
import UserFollow from '../../components/UserListItem/UserFollow/UserFollow';
import TabMenu from '../../components/common/TabMenu/TabMenu';
import Nav from '../../components/Nav/Nav';
import * as S from './StyledFollowerList';

const FollowerList = () => {
  const { accountName } = useParams();
  const [followerList, setFollowerList] = useState([]);

  useEffect(() => {
    if (!followerList.length) {
      const getFollowerdata = async () => {
        const data = await profileAPI.getFollowerList(accountName);
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
          // eslint-disable-next-line no-underscore-dangle
          <UserFollow key={item._id} data={item} index={index} />
        ))}
      </S.FollowersSection>
      <TabMenu />
    </S.AllWrapp>
  );
};

export default FollowerList;
