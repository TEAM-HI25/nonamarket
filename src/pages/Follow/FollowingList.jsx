import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../context/context';
import profileAPI from '../../api/profileAPI';
import UserFollow from '../../components/UserListItem/UserFollow/UserFollow';
import TabMenu from '../../components/common/TabMenu/TabMenu';
import Nav from '../../components/Nav/Nav';
import * as S from './StyledFollowerList';

const FollowingList = () => {
  const { user } = useContext(AuthContext);
  const { accountName } = useParams();
  const [followingList, setFollowingList] = useState([]);

  useEffect(() => {
    if (!followingList.length) {
      const getFollowerdata = async () => {
        const data = await profileAPI.getFollowingdata(user.token, accountName);
        setFollowingList(data);
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
