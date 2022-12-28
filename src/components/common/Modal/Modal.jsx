import * as S from './StyledModal';

const Modal = ({ handleCloseModal, handleShowInnerModal }) => {
  return (
    <S.ModalWrapper onClick={handleCloseModal}>
      <S.ModalContainer>
        <S.ModalBar />
        <ul>
          <S.ModalList>
            <button type='button' onClick={handleShowInnerModal}>
              삭제
            </button>
          </S.ModalList>
          <S.ModalList>
            <button type='button'>수정</button>
          </S.ModalList>
          <S.ModalList>
            <button type='button'>웹사이트에서 상품 보기</button>
          </S.ModalList>
        </ul>
      </S.ModalContainer>
    </S.ModalWrapper>
  );
};

export default Modal;
