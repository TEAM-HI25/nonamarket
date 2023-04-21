import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../context/context';
import profileAPI from '../../api/profileAPI';
import UserFollow from '../../components/UserListItem/UserFollow/UserFollow';
import TabMenu from '../../components/common/TabMenu/TabMenu';
import Nav from '../../components/Nav/Nav';
import * as S from './StyledFollowerList';

const FollowerList = () => {
  const { user } = useContext(AuthContext);
  const { accountName } = useParams();
  const [followerList, setFollowerList] = useState([]);

  useEffect(() => {
    if (!followerList.length) {
      const getFollowerdata = async () => {
        const data = await profileAPI.getFollowerList(user.token, accountName);
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
