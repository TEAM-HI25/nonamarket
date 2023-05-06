import { useEffect, useState } from 'react';
import productAPI from '../../../api/productAPI';
import ProductSection from './StyledProductWrapp';
import Product from './Product';

const ProductWrapp = ({ pageAccount }) => {
  const [productList, setProductList] = useState([]);

  // 판매중인 상품페이지에 상품 불러오기
  // PageAccount가 변경될 때 렌더링될 수 있도록 서버통신
  useEffect(() => {
    const setProductFeed = async () => {
      const data = await productAPI.loadProductFeed(pageAccount);
      setProductList(data.product);
    };
    setProductFeed();
  }, [pageAccount]);

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
