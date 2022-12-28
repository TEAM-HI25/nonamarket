import {
  InnerModalContainer,
  InnerModalWrap,
  InnerModalBtnWrap,
} from './StyledPostInnerModal';

const ProductInnerModal = ({ handleCloseInnerModal }) => {
  return (
    <InnerModalContainer>
      <h2 className='hidden'>상품 삭제 모달</h2>
      <InnerModalWrap>
        <p>상품을 삭제할까요?</p>
        <InnerModalBtnWrap>
          <button type='button' onClick={handleCloseInnerModal}>
            취소
          </button>
          <button type='button'>삭제</button>
        </InnerModalBtnWrap>
      </InnerModalWrap>
    </InnerModalContainer>
  );
};

export default ProductInnerModal;
