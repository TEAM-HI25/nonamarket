import { useState } from 'react';
import Modal from '../Modal/ProductModal';
import ProductInnerModal from '../Modal/ProductInnerModal';
import * as S from './StyledProduct';

const Product = ({ product }) => {
  const replacePrice = product.price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  // 모달 열기
  const [openModal, setOpenModal] = useState(false);
  const [openInnerModal, setOpenInnerModal] = useState(false);

  // 메인 모달 열기 함수
  const handleShowModal = () => {
    setOpenModal(true);
  };

  // 메인 모달 닫기 함수
  const handleCloseModal = (event) => {
    // 부모요소인 S.ModalWrapper 를 클릭했을때만 이벤트가 실행되게 하기
    if (event.target === event.currentTarget) {
      setOpenModal(false);
    }
  };

  // 이너 모달 열기 함수
  const handleShowInnerModal = () => {
    setOpenInnerModal(true);
  };
  // 이너 모달 닫기 함수
  const handleCloseInnerModal = () => {
    setOpenModal(false);
    setOpenInnerModal(false);
  };

  return (
    <div>
      <S.ProductBtn type='button' onClick={handleShowModal}>
        <S.ProductImg src={product.itemImage} alt='업로드된상품이미지' />
        <S.ProductName>{product.itemName}</S.ProductName>
        <S.ProductPrice>{replacePrice}원</S.ProductPrice>
      </S.ProductBtn>
      {openModal && (
        <Modal
          handleCloseModal={handleCloseModal}
          handleShowInnerModal={handleShowInnerModal}
        />
      )}
      {openInnerModal && (
        <ProductInnerModal
          handleCloseInnerModal={handleCloseInnerModal}
          productId={product.id}
        />
      )}
    </div>
  );
};

export default Product;
