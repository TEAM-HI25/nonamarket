import { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../../context/context';
import Nav from '../../../components/Nav/Nav';
// import Product from '../../../components/common/Product/Product';
import TabMenu from '../../../components/common/TabMenu/TabMenu';
import ProfileInfo from '../../../components/ProfileInfo/ProfileInfo';
import MenuBar from '../../../components/MenuBar/MenuBar';
import PostCard from '../../../components/common/PostCard/PostCard';
import * as S from './StyledUserProfile';
import FetchApi from '../../../api';

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  // 로그인한 사용자의 accountname
  const authAccountName = user.accountname;
  const [userProfile, setUserProfile] = useState(null);
  const [userPostArr, setUserPostArr] = useState([]);
  const location = useLocation();
  const pageAccount = location.pathname.split('/')[2];
  const BASE_URL = 'https://mandarin.api.weniv.co.kr';

  useEffect(() => {
    if (!userProfile) {
      const getUserProfileInfo = async () => {
        const data = await FetchApi.getUserInfo(user.token, pageAccount);
        setUserProfile(data.profile);
      };
      getUserProfileInfo();
    }
  }, [userProfile]);

  useEffect(() => {
    if (!userPostArr.length) {
      const getMyPost = async () => {
        const url = `${BASE_URL}/post/${pageAccount}/userpost`;
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${user.token}`,
            'Content-type': 'application/json',
          },
        });
        const data = await response.json();
        setUserPostArr(data.post);
      };
      getMyPost();
    }
  }, []);

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
            {/* <Product /> */}
            {/* <Product /> */}
            {/* <Product /> */}
          </div>
        </S.ProductsSection>
        <S.PostCardWrap>
          <MenuBar />
          {userPostArr.length ? (
            userPostArr.map((item) => <PostCard key={item.id} data={item} />)
          ) : (
            <>아마도 싫어합니다.</>
          )}
        </S.PostCardWrap>
        <S.PostCardWrap>
          {/* <h2 className='hidden'>SNS 이미지 리스트</h2>
          <S.ProfilePostAlbumWrap>
            <li>사진</li>
            <li>사진</li>
            <li>사진</li>
            <li>사진</li>
            <li>사진</li>
            <li>사진</li>
            <li>사진</li>
            <li>사진</li>
            <li>사진</li>
          </S.ProfilePostAlbumWrap> */}
        </S.PostCardWrap>
      </S.MainWrap>
      <TabMenu />
    </S.Container>
  );
};

export default UserProfile;
