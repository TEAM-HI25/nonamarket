import Nav from '../../../components/Nav/Nav';
import Product from '../../../components/common/Product/Product';
import TabMenu from '../../../components/common/TabMenu/TabMenu';
import ProfileInfo from '../../../components/ProfileInfo/ProfileInfo';
import MenuBar from '../../../components/MenuBar/MenuBar';
import PostCard from '../../../components/common/PostCard/PostCard';
import * as S from '../YourProfile/StyledYourProfile';

const MyProfile = () => {
  return (
    <S.Container>
      <Nav type='home' />
      <S.MainWrap>
        <ProfileInfo />
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
