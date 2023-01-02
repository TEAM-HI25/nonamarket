import { useContext } from 'react';
import ProfileImg from '../common/ProfileImg/ProfileImg';
import * as S from './StyledComment';
import verticalIcon from '../../assets/images/icon-more-vertical.svg';
// import CommentModal from '../common/Modal/CommentModal';
import useModal from '../../hooks/useModal';
import Modal from '../common/Modals/Modal';
import ModalBtn from '../common/Modals/ModalBtn';
import { AuthContext } from '../../context/context';
import InnerModal from '../common/Modals/InnerModal';

const Comment = ({ commentsData, postid }) => {
  const { user } = useContext(AuthContext);
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

  return (
    <div>
      {commentsData &&
        commentsData.map((comment) => {
          return (
            <S.CommentListWrapper>
              <S.CommentListContainer>
                <li key={comment.id}>
                  <S.CommentUserInfo>
                    <ProfileImg
                      size='36px'
                      src={comment.author.image}
                      alt='프로필이미지'
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
              </S.CommentListContainer>
              {/* eslint-disable-next-line no-nested-ternary */}
              {!isShowModal ? null : comment.author.accountname ===
                user.accountname ? (
                <Modal CloseModal={handleCloseModal}>
                  <ModalBtn name='삭제' onClick={handleShowInnerModal} />
                </Modal>
              ) : (
                // <Modal CloseModal={handleCloseModal}>
                //   <ModalBtn name='삭제' onClick={handleShowInnerModal} />
                // </Modal>
                <Modal CloseModal={handleCloseModal}>
                  <ModalBtn name='신고하기' onClick={handleShowInnerModal} />
                </Modal>
              )}

              {/* eslint-disable-next-line no-nested-ternary */}
              {!isShowInnerModal ? null : comment.author.accountname ===
                user.accountname ? (
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

              {/* {isOpenModal && (
                <CommentModal
                  onClick={handleCloseModal}
                  setIsOpenModal={setIsOpenModal}
                  comment={comment}
                  postid={postid}
                  handleDelete={handleDelete}
                />
              )} */}
            </S.CommentListWrapper>
          );
        })}
    </div>
  );
};

export default Comment;
