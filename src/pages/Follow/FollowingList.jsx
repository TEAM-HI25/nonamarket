import UserFollow from '../../components/UserListItem/UserFollow/UserFollow';
import TabMenu from '../../components/common/TabMenu/TabMenu';
import Nav from '../../components/Nav/Nav';
import * as S from './StyledFollowerList';

const FollowingList = () => {
  return (
    <S.AllWrapp>
      <Nav type='follow' />
      <S.FollowersSection>
        <UserFollow />
        <UserFollow />
        <UserFollow />
        <UserFollow />
      </S.FollowersSection>
      <TabMenu />
    </S.AllWrapp>
  );
};

export default FollowingList;
