import { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../../context/context';
import Nav from '../../../components/Nav/Nav';
// import Product from '../../../components/common/Product/Product';
import TabMenu from '../../../components/common/TabMenu/TabMenu';
import ProfileInfo from '../../../components/ProfileInfo/ProfileInfo';
import MenuBar from '../../../components/MenuBar/MenuBar';
// import PostCard from '../../../components/common/PostCard/PostCard';
import * as S from './StyledUserProfile';
import FetchApi from '../../../api';

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  // 로그인한 사용자의 accountname
  const authAccountName = user.accountname;
  const [userProfile, setUserProfile] = useState(null);
  const location = useLocation();
  const pageAccount = location.pathname.split('/')[2];

  useEffect(() => {
    if (!userProfile) {
      const getUserProfileInfo = async () => {
        const data = await FetchApi.getUserInfo(user.token, pageAccount);
        console.log(data.profile);
        setUserProfile(data.profile);
      };
      getUserProfileInfo();
    }
  }, [userProfile]);

  return (
    <S.Container>
      <Nav type='home' />
      <S.MainWrap>
        {userProfile ? (
          <ProfileInfo
            userProfile={userProfile}
            authAccountName={authAccountName}
          />
        ) : (
          <p>로딩중입니다...</p>
        )}

        <S.ProductsSection>
          <h2>판매 중인 상품</h2>
          <div>
            {/* <Product />
            <Product />
            <Product /> */}
          </div>
        </S.ProductsSection>
        <S.PostCardWrap>
          <MenuBar />
          {/* <PostCard />
          <PostCard />
          <PostCard /> */}
        </S.PostCardWrap>
      </S.MainWrap>
      <TabMenu />
    </S.Container>
  );
};

export default UserProfile;
