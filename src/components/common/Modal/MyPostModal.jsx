import { useNavigate } from 'react-router-dom';
import {
  PostModalWrap,
  PostModalBtnWrap,
  PostModalBtn,
} from './StyledPostModal';

const MyPostModal = ({ CloseModal, ShowInnerModal }) => {
  const navigate = useNavigate();

  const handleGoPostEdit = () => {
    navigate('/addproduct');
  };

  return (
    <PostModalWrap onClick={CloseModal}>
      <h2 className='hidden'>게시글 모달</h2>
      <PostModalBtnWrap onClick={(e) => e.stopPropagation()}>
        <PostModalBtn type='button' onClick={ShowInnerModal}>
          삭제
        </PostModalBtn>
        <PostModalBtn type='button' onClick={handleGoPostEdit}>
          수정
        </PostModalBtn>
      </PostModalBtnWrap>
    </PostModalWrap>
  );
};

export default MyPostModal;
