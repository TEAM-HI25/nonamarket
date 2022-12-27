import {
  PostModalWrap,
  PostModalBtnWrap,
  PostModalBtn,
} from './StyledPostModal';

const OthersPostModal = ({ CloseModal, ShowInnerModal }) => {
  return (
    <PostModalWrap onClick={CloseModal}>
      <h2 className='hidden'>게시글 모달</h2>
      <PostModalBtnWrap onClick={(e) => e.stopPropagation()}>
        <PostModalBtn type='button' onClick={ShowInnerModal}>
          신고하기
        </PostModalBtn>
      </PostModalBtnWrap>
    </PostModalWrap>
  );
};

export default OthersPostModal;
