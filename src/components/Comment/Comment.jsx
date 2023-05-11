import { useSelector } from 'react-redux';
import verticalIcon from '../../assets/images/icon-more-vertical.svg';
import useModal from '../../hooks/useModal';
import Modal from '../common/Modals/Modal';
import ModalBtn from '../common/Modals/ModalBtn';
import InnerModal from '../common/Modals/InnerModal';
import ProfileImg from '../common/ProfileImg/ProfileImg';
import * as S from './StyledComment';

const Comment = ({ comment, postid }) => {
  const LoginData = useSelector((state) => state.Login.user);
  const [
    isShowModal,
    isShowInnerModal,
    handleShowModal,
    handleCloseModal,
    handleShowInnerModal,
    handleCloseInnerModal,
  ] = useModal();

  const commentTime = (time) => {
    const uploadTime = Date.parse(time);
    const now = Date.now();
    const gap = (now - uploadTime) / 1000 - 120;

    if (gap < 60) {
      return '방금 전';
    }
    if (gap < 3600) {
      return `${Math.floor(gap / 60)}분 전`;
    }
    if (gap < 86400) {
      return `${Math.floor(gap / 3600)}시간 전`;
    }
    if (gap < 2592000) {
      return `${Math.floor(gap / 86400)}일 전`;
    }
    return `${Math.floor(gap / 2592000)}달 전`;
  };
  // API 서버 변경으로 인한 임시 image 데이터 처리
  let profileImg = comment.author.image;
  if (profileImg.includes('mandarin.api')) {
    profileImg = comment.author.image.replace('mandarin.api', 'api.mandarin');
  }
  const handleImgError = (e) => {
    e.target.src = ProfileImg;
  };

  return (
    <S.CommentListWrapper>
      <ul>
        <li key={comment.id}>
          <S.CommentUserInfo>
            <ProfileImg
              size='36px'
              src={profileImg}
              alt='프로필이미지'
              onError={handleImgError}
            />
            <S.UserInfo>
              <strong>{comment.author.username}</strong>
              <p>· {commentTime(comment.createdAt)}</p>
              <button type='button' onClick={handleShowModal}>
                <img src={verticalIcon} alt='댓글 수정 메뉴 버튼' />
              </button>
            </S.UserInfo>
          </S.CommentUserInfo>
          <S.CommentContent>{comment.content}</S.CommentContent>
        </li>
      </ul>
      {/* eslint-disable-next-line no-nested-ternary */}
      {!isShowModal ? null : comment.author.accountname ===
        LoginData.accountname ? (
        <Modal CloseModal={handleCloseModal}>
          <ModalBtn name='삭제' onClick={handleShowInnerModal} />
        </Modal>
      ) : (
        <Modal CloseModal={handleCloseModal}>
          <ModalBtn name='신고하기' onClick={handleShowInnerModal} />
        </Modal>
      )}

      {/* eslint-disable-next-line no-nested-ternary */}
      {!isShowInnerModal ? null : comment.author.accountname ===
        LoginData.accountname ? (
        <InnerModal
          name='댓글삭제'
          CloseInnerModal={handleCloseInnerModal}
          postId={postid}
          comment={comment}
        />
      ) : (
        <InnerModal
          name='댓글신고'
          CloseInnerModal={handleCloseInnerModal}
          postId={postid}
          comment={comment}
        />
      )}
    </S.CommentListWrapper>
  );
};

export default Comment;
