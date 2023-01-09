import { PostModalWrap, PostModalBtnWrap } from './StyledModal';

const Modal = ({ children, CloseModal }) => {
  return (
    <PostModalWrap onClick={CloseModal}>
      <h2 className='hidden'>게시글 모달</h2>
      <PostModalBtnWrap onClick={(e) => e.stopPropagation()}>
        {children}
      </PostModalBtnWrap>
    </PostModalWrap>
  );
};

export default Modal;
