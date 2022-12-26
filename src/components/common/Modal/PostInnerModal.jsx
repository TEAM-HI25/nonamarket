import {
  InnerModalContainer,
  InnerModalWrap,
  InnerModalBtnWrap,
} from './StyledPostInnerModal';

const PostInnerModal = ({ name, CloseInnerModal, postId }) => {
  const handleDeletePost = () => {
    console.log('삭제');
    console.log(postId);
  };

  const handleReportPost = () => {
    console.log('신고');
    console.log(postId);
    // eslint-disable-next-line no-alert
    alert('신고되었습니다.');
    CloseInnerModal();
  };

  return (
    <InnerModalContainer>
      <h2 className='hidden'>게시글 삭제 혹은 신고 확인 모달</h2>
      <InnerModalWrap>
        <p>게시글을 {name}할까요?</p>
        <InnerModalBtnWrap>
          <button type='button' onClick={CloseInnerModal}>
            취소
          </button>
          <button
            type='button'
            onClick={name === '삭제' ? handleDeletePost : handleReportPost}
          >
            {name}
          </button>
        </InnerModalBtnWrap>
      </InnerModalWrap>
    </InnerModalContainer>
  );
};

export default PostInnerModal;
