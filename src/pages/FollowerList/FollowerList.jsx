import UserFollow from '../../components/common/UserFollow/UserFollow';
import TabMenu from '../../components/common/TabMenu/TabMenu';
import ArrowImg from '../../assets/images/icon-arrow-left.svg';
import * as S from './StyledFollowerList';

const FollowerList = () => {
  return (
    <>
      <S.FollowersNavWrapp>
        <img src={ArrowImg} alt='뒤로가기 버튼' />
        <p>Followers</p>
      </S.FollowersNavWrapp>
      <S.FollowersSection>
        <UserFollow />
        <UserFollow />
        <UserFollow />
        <UserFollow />
      </S.FollowersSection>
      <TabMenu />
    </>
  );
};

export default FollowerList;
