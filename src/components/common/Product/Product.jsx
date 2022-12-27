import * as S from './StyledProduct';
// import productImgExample from '../../../assets/images/product-img-example.png';

const Product = ({ product }) => {
  const replacePrice = product.price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return (
    <S.wrapper>
      <button type='button'>
        <S.ProductImg src={product.itemImage} alt='업로드된상품이미지' />
        <S.ProductName>{product.itemName}</S.ProductName>
        <S.ProductPrice>{replacePrice}원</S.ProductPrice>
      </button>
    </S.wrapper>
  );
};

export default Product;
