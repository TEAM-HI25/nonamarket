import * as S from './StyledProduct';
import productImgExample from '../../../assets/images/product-img-example.png';

const Product = () => {
  return (
    <S.wrapper>
      <S.ProductImg src={productImgExample} alt='업로드된상품이미지' />
      <S.ProductName>애월읍 노지 감귤</S.ProductName>
      <S.ProductPrice>35,000</S.ProductPrice>
    </S.wrapper>
  );
};

export default Product;
