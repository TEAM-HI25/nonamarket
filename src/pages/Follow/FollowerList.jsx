import UserFollow from '../../components/UserListItem/UserFollow/UserFollow';
import TabMenu from '../../components/common/TabMenu/TabMenu';
import Nav from '../../components/Nav/Nav';
import * as S from './StyledFollowerList';

const FollowerList = () => {
  return (
    <S.AllWrapp>
      <Nav type='follow' followtitle='FollowerList' />
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

export default FollowerList;
