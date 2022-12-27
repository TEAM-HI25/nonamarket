import { useContext, useState } from 'react';
import { AuthContext } from '../../../context/context';
import Nav from '../../../components/Nav/Nav';
import Product from '../../../components/common/Product/Product';
import TabMenu from '../../../components/common/TabMenu/TabMenu';
import ProfileInfo from '../../../components/ProfileInfo/ProfileInfo';
import MenuBar from '../../../components/MenuBar/MenuBar';
import PostCard from '../../../components/common/PostCard/PostCard';
import * as S from '../YourProfile/StyledYourProfile';
import FetchApi from '../../../api';

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const [userImg, setUserImg] = useState('');
  const [userName, setUserName] = useState('');
  const [userAccountName, setUserAccountName] = useState('');
  const [userIntro, setUserIntro] = useState('');
  const [followerCount, setFollwerCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);

  const getMyProfileInfo = async () => {
    const data = await FetchApi.getMyinfo(user.token);
    setUserImg(data.user.image);
    setUserName(data.user.username);
    setUserAccountName(data.user.accountname);
    setUserIntro(data.user.intro);
    setFollwerCount(data.user.followerCount);
    setFollowingCount(data.user.followingCount);
  };
  getMyProfileInfo();

  return (
    <S.Container>
      <Nav type='home' />
      <S.MainWrap>
        <ProfileInfo
          userImg={userImg}
          userName={userName}
          userAccountName={userAccountName}
          userIntro={userIntro}
          followerCount={followerCount}
          followingCount={followingCount}
        />
        <S.ProductsSection>
          <h2>판매 중인 상품</h2>
          <div>
            <Product />
            <Product />
            <Product />
          </div>
        </S.ProductsSection>
        <S.PostCardWrap>
          <MenuBar />
          <PostCard />
          <PostCard />
          <PostCard />
        </S.PostCardWrap>
      </S.MainWrap>
      <TabMenu />
    </S.Container>
  );
};

export default MyProfile;
