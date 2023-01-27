import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/context';
import productAPI from '../../../api/productAPI';
import ProductSection from './StyledProductWrapp';
import Product from './Product';

const ProductWrapp = ({ pageAccount }) => {
  const [productList, setProductList] = useState([]);
  const { user } = useContext(AuthContext);

  // 판매중인 상품페이지에 상품 불러오기
  // 화면에 첫 렌더링될때만 서버통신 실행
  useEffect(() => {
    const setProductFeed = async () => {
      const data = await productAPI.loadProductFeed(user.token, pageAccount);
      setProductList(data.product);
    };
    setProductFeed();
  }, []);

  return productList.length > 0 ? (
    <ProductSection>
      <h2>보관중인 식재료🍴</h2>
      <ul>
        <li>
          {productList.map((item) => {
            return <Product product={item} key={item.id} />;
          })}
        </li>
      </ul>
    </ProductSection>
  ) : null;
};

export default ProductWrapp;
