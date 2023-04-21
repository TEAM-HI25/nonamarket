import ProductForm from '../../components/ProductForm/ProductForm';

// editing boolean 값을 이용하여 상품 수정 페이지인지 상품 등록인지 구분
const EditProduct = () => {
  return <ProductForm editing={true} />;
};

export default EditProduct;
