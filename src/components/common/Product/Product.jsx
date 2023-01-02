import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/context';
import useModal from '../../../hooks/useModal';
import Modal from '../Modals/Modal';
import ModalBtn from '../Modals/ModalBtn';
import InnerModal from '../Modals/InnerModal';
import * as S from './StyledProduct';

const Product = ({ product }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const replacePrice = product.price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  // 모달 관리 커스텀훅
  const [
    isShowModal,
    isShowInnerModal,
    handleShowModal,
    handleCloseModal,
    handleShowInnerModal,
    handleCloseInnerModal,
  ] = useModal();

  return (
    <div>
      <S.ProductBtn
        type='button'
        onClick={() => {
          if (product.author.accountname === user.accountname) {
            handleShowModal();
          } else {
            window.open(product.link);
          }
        }}
      >
        <S.ProductImg src={product.itemImage} alt='업로드된상품이미지' />
        <S.ProductName>{product.itemName}</S.ProductName>
        {replacePrice === '1' ? (
          <S.ProductPrice>무료 나눔</S.ProductPrice>
        ) : (
          <S.ProductPrice>{replacePrice}원</S.ProductPrice>
        )}
      </S.ProductBtn>
      {isShowModal && (
        <Modal CloseModal={handleCloseModal}>
          <ModalBtn name='삭제' onClick={handleShowInnerModal} />
          <ModalBtn
            name='수정'
            onClick={() => {
              navigate(`/product/${product.id}`);
            }}
          />
          <ModalBtn
            name='웹사이트에서 상품 보기 '
            onClick={() => {
              window.open(product.link);
            }}
          />
        </Modal>
      )}
      {isShowInnerModal && (
        <InnerModal
          name='상품삭제'
          CloseInnerModal={handleCloseInnerModal}
          productId={product.id}
        />
      )}
    </div>
  );
};

export default Product;
