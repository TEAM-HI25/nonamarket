import { useContext } from 'react';
import { AuthContext } from '../../../context/context';
import * as S from './StyledCommentModal';

const CommentModal = ({ setIsOpenModal, comment, postid, handleDelete }) => {
  const { user } = useContext(AuthContext);
  const BASE_URL = 'https://mandarin.api.weniv.co.kr';

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  // 삭제하기 기능
  const handleComment = async () => {
    if (comment.author.accountname === user.accountname) {
      try {
        const response = await fetch(
          `${BASE_URL}/post/${postid}/comments/${comment.id}`,
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
        handleDelete();
      } catch (error) {
        console.log(error);
      }
    }

    // 신고하기 기능
    if (comment.author.accountname !== user.accountname) {
      try {
        const response = await fetch(
          `${BASE_URL}/post/${postid}/comments/${comment.id}/report`,
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${user.token}`,
              'Content-type': 'application/json',
            },
          },
        );
        const data = await response.json();
        console.log(data);
        // eslint-disable-next-line no-alert
        alert('해당 댓글이 신고되었습니다.');
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <S.CommentModalWrapper onClick={handleCloseModal}>
      <S.ModalBtnWrapper>
        <S.ModalBtn onClick={handleComment}>
          {comment.author.accountname === user.accountname ? '삭제' : '신고'}
        </S.ModalBtn>
      </S.ModalBtnWrapper>
    </S.CommentModalWrapper>
  );
};

export default CommentModal;
