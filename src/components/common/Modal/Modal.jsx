import * as S from './StyledModal';

const Modal = () => {
  return (
    <S.ModalWrapper>
      <S.ModalContainer>
        <S.ModalBar />
        <ul>
          <S.ModalList>삭제</S.ModalList>
          <S.ModalList>수정</S.ModalList>
          <S.ModalList>웹사이트에서 상품 보기</S.ModalList>
        </ul>
      </S.ModalContainer>
    </S.ModalWrapper>
  );
};

export default Modal;
