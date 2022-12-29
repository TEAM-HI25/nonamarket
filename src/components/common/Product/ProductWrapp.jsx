import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/context';
import FetchApi from '../../../api';
import ProductSection from './StyledProductWrapp';
import Product from './Product';

const ProductWrapp = () => {
  const [productList, setProductList] = useState([]);
  const { user } = useContext(AuthContext);

  // 화면에 첫 렌더링될때만 서버통신 실행
  useEffect(() => {
    const setProductFeed = async () => {
      const data = await FetchApi.loadProductFeed(user.token, user.accountname);
      setProductList(data.product);
      console.log(data.product);
    };
    setProductFeed();
  }, []);

  return productList.length > 0 ? (
    <ProductSection>
      <h2>판매 중인 상품</h2>
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
