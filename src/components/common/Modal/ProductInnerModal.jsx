import { useContext } from 'react';
import { AuthContext } from '../../../context/context';
import {
  InnerModalContainer,
  InnerModalWrap,
  InnerModalBtnWrap,
} from './StyledPostInnerModal';

const ProductInnerModal = ({ handleCloseInnerModal, productId }) => {
  const { user } = useContext(AuthContext);

  // 상품 삭제 통신
  const handleDeleteProduct = async () => {
    const response = await fetch(
      `https://mandarin.api.weniv.co.kr/product/${productId}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${user.token}`,
          'Content-type': 'application/json',
        },
      },
    );
    const data = await response.json();
    console.log(data);
    if (parseInt(data.status, 10) === 200) {
      handleCloseInnerModal();
      // 페이지 새로고침돼서 삭제된 상품목록 페이지 보여주기
      window.location.reload();
    }
  };
  return (
    <InnerModalContainer>
      <h2 className='hidden'>상품 삭제 모달</h2>
      <InnerModalWrap>
        <p>상품을 삭제할까요?</p>
        <InnerModalBtnWrap>
          <button type='button' onClick={handleCloseInnerModal}>
            취소
          </button>
          <button type='button' onClick={handleDeleteProduct}>
            삭제
          </button>
        </InnerModalBtnWrap>
      </InnerModalWrap>
    </InnerModalContainer>
  );
};

export default ProductInnerModal;
