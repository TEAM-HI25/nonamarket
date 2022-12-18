import Nav from '../../components/Nav/Nav';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo';
import ProductsSection from './StyledYourProfile';
import Product from '../../components/common/Product/Product';
import TabMenu from '../../components/common/TabMenu/TabMenu';

const YourProfile = () => {
  return (
    <>
      <Nav type='home' />
      <ProfileInfo />
      <ProductsSection>
        <h2>판매 중인 상품</h2>
        <div>
          <Product />
          <Product />
          <Product />
        </div>
      </ProductsSection>
      <TabMenu />
    </>
  );
};

export default YourProfile;
