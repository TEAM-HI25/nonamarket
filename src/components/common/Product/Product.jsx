import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useModal from '../../../hooks/useModal';
import Modal from '../Modals/Modal';
import ModalBtn from '../Modals/ModalBtn';
import InnerModal from '../Modals/InnerModal';
import * as S from './StyledProduct';

const Product = ({ product }) => {
  const navigate = useNavigate();
  const LoginData = useSelector((state) => state.Login.user);
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
  // API 서버 변경으로 인한 임시 image 데이터 처리
  let itemImg = product.itemImage;
  if (itemImg.includes('mandarin.api')) {
    itemImg = itemImg.replace('mandarin.api', 'api.mandarin');
  }

  return (
    <div>
      <S.ProductBtn
        type='button'
        onClick={() => {
          if (product.author.accountname === LoginData.accountname) {
            handleShowModal();
          } else {
            window.open(product.link);
          }
        }}
      >
        <S.ProductImg src={itemImg} alt='업로드된상품이미지' />
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
