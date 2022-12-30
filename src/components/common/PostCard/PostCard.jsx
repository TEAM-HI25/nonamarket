import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/context';
import MessageCircleIcon from '../../../assets/images/icon-message-circle-mini.svg';
import verticalMenuIcon from '../../../assets/images/icon-more-vertical.svg';
import LikeButton from '../Button/LikeButton';
import useModal from '../../../hooks/useModal';
import Modal from '../Modals/Modal';
import ModalBtn from '../Modals/ModalBtn';
import InnerModal from '../Modals/InnerModal';
import * as S from './StyledPostCard';

const PostCard = ({ data }) => {
  const {
    author,
    content,
    image,
    createdAt,
    id,
    heartCount,
    hearted,
    commentCount,
  } = data;

  const [
    isShowModal,
    isShowInnerModal,
    handleShowModal,
    handleCloseModal,
    handleShowInnerModal,
    handleCloseInnerModal,
  ] = useModal();

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoPostEdit = () => {
    navigate('/addproduct');
  };

  const handleGoUserPage = () => {
    navigate(`/yourprofile/${author.accountname}`);
  };

  const handleGoDetailPage = () => {
    navigate(`/postdetail/${id}`);
  };

  return (
    <>
      <S.ContentsWrapper>
        <S.ProfileImage
          src={author.image}
          alt='프로필 이미지'
          onClick={handleGoUserPage}
        />

        <S.UserInfo>
          <Link to={`/yourprofile/${author.accountname}`}>
            <S.UserName>{author.username}</S.UserName>
            <S.UserAccount>@ {author.accountname}</S.UserAccount>
          </Link>
          <button type='button' onClick={handleShowModal}>
            <img src={verticalMenuIcon} alt='더보기 메뉴' />
          </button>
        </S.UserInfo>

        <S.PostContents onClick={handleGoDetailPage}>
          <p>{content}</p>
          {image && <img src={image} alt='컨텐츠 관련 이미지' />}
        </S.PostContents>

        <S.BtnWrapper>
          <LikeButton heartCount={heartCount} hearted={hearted} postId={id} />
          <button type='button' onClick={handleGoDetailPage}>
            <img src={MessageCircleIcon} alt='댓글 버튼' />
            <span>{commentCount}</span>
          </button>
        </S.BtnWrapper>
        <S.PostDate>
          {`${createdAt
            .slice(0, 10)
            .replace('-', '년 ')
            .replace('-', '월 ')}일`}
        </S.PostDate>
      </S.ContentsWrapper>

      {/* eslint-disable-next-line no-nested-ternary */}
      {!isShowModal ? null : author.accountname === user.accountname ? (
        <Modal CloseModal={handleCloseModal}>
          <ModalBtn name='삭제' onClick={handleShowInnerModal} />
          <ModalBtn name='수정' onClick={handleGoPostEdit} />
        </Modal>
      ) : (
        <Modal CloseModal={handleCloseModal}>
          <ModalBtn name='신고하기' onClick={handleShowInnerModal} />
        </Modal>
      )}
      {/* eslint-disable-next-line no-nested-ternary */}
      {!isShowInnerModal ? null : author.accountname === user.accountname ? (
        <InnerModal
          name='게시글삭제'
          CloseInnerModal={handleCloseInnerModal}
          postId={id}
        />
      ) : (
        <InnerModal
          name='게시글신고'
          CloseInnerModal={handleCloseInnerModal}
          postId={id}
        />
      )}
    </>
  );
};

export default PostCard;
