import AddProduct from '../AddProduct/AddProduct';

// editing을 이용하여 편집페이지인지 등록인지 구분
const EditProduct = () => {
  return <AddProduct editing={true} />;
};

export default EditProduct;
