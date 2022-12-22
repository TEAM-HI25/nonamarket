import Nav from '../../components/Nav/Nav';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo';
import Product from '../../components/common/Product/Product';
import TabMenu from '../../components/common/TabMenu/TabMenu';
import MenuBar from '../../components/MenuBar/MenuBar';
import PostCard from '../../components/common/PostCard/PostCard';
import postSquareImgExample from '../../assets/images/post-square-img-example.png';
import * as S from './StyledYourProfile';

const YourProfile = () => {
  return (
    <>
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
        <MenuBar />
        <S.PostCardWrap>
          <PostCard />
        </S.PostCardWrap>
        <S.PostCardWrap>
          <h2 className='hidden'>SNS 이미지 리스트</h2>
          <S.ProfilePostAlbumWrap>
            {/* 사진 데이터들어오면 아래 사진데이터는 리팩토링될 예정 */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => {
              return <img src={postSquareImgExample} alt='정방형 이미지' />;
            })}
          </S.ProfilePostAlbumWrap>
        </S.PostCardWrap>
      </S.MainWrap>
      <TabMenu />
    </>
  );
};

export default YourProfile;
