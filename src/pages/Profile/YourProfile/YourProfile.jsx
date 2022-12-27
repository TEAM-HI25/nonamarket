import { useParams } from 'react-router-dom';
import { useState, useContext } from 'react';
import { AuthContext } from '../../../context/context';
import Nav from '../../../components/Nav/Nav';
import ProfileInfo from '../../../components/ProfileInfo/ProfileInfo';
import Product from '../../../components/common/Product/Product';
import TabMenu from '../../../components/common/TabMenu/TabMenu';
import MenuBar from '../../../components/MenuBar/MenuBar';
import PostCard from '../../../components/common/PostCard/PostCard';
// import postSquareImgExample from '../../assets/images/post-square-img-example.png';
import * as S from './StyledYourProfile';
import FetchApi from '../../../api';

const YourProfile = () => {
  const { accountName } = useParams();
  const { user } = useContext(AuthContext);
  const [userImg, setUserImg] = useState('');
  const [userName, setUserName] = useState('');
  const [userAccountName, setUserAccountName] = useState('');
  const [userIntro, setUserIntro] = useState('');
  const [followerCount, setFollwerCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);

  const getYourProfileInfo = async () => {
    const data = await FetchApi.getUserInfo(user.token, accountName);
    setUserImg(data.profile.image);
    setUserName(data.profile.username);
    setUserAccountName(data.profile.accountname);
    setUserIntro(data.profile.intro);
    setFollwerCount(data.profile.followerCount);
    setFollowingCount(data.profile.followingCount);
  };
  getYourProfileInfo();
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
        </S.PostCardWrap>
        <S.PostCardWrap>
          <h2 className='hidden'>SNS 이미지 리스트</h2>
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
          </S.ProfilePostAlbumWrap>
        </S.PostCardWrap>
      </S.MainWrap>
      <TabMenu />
    </S.Container>
  );
};

export default YourProfile;
