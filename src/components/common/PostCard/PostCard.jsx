import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import ProfileImg from '../../../assets/images/profile-image-mini.svg';
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
  const LoginData = useSelector((state) => state.Login.user);
  const navigate = useNavigate();

  const handleGoPostEdit = () => {
    navigate(`/editpost/${id}`);
  };

  const handleGoUserPage = () => {
    navigate(`/profile/${author.accountname}`);
  };

  const handleGoDetailPage = () => {
    navigate(`/postdetail/${id}`);
  };
  // API 서버 변경으로 인한 임시 image 데이터 처리
  let profileImg = author.image;
  let postImg = image;
  if (profileImg.includes('mandarin.api') && postImg) {
    profileImg = author.image.replace('mandarin.api', 'api.mandarin');
    postImg = image.replace('mandarin.api', 'api.mandarin');
  }
  const handleImgError = (e) => {
    e.target.src = ProfileImg;
  };

  return (
    <>
      <S.ContentsWrapper>
        <S.ProfileImage
          src={profileImg}
          alt='프로필 이미지'
          onClick={handleGoUserPage}
          onError={handleImgError}
        />

        <S.UserInfo>
          <Link to={`/profile/${author.accountname}`}>
            <S.UserName>{author.username}</S.UserName>
            <S.UserAccount>@ {author.accountname}</S.UserAccount>
          </Link>
          <button type='button' onClick={handleShowModal}>
            <img src={verticalMenuIcon} alt='더보기 메뉴' />
          </button>
        </S.UserInfo>
        <S.PostContents onClick={handleGoDetailPage}>
          <p>{content}</p>
          <S.PostImgLink onError={handleImgError}>
            {postImg &&
              postImg
                .split(',')
                .map((item) => (
                  <img key={item} src={item} alt='컨텐츠 관련 이미지' />
                ))}
          </S.PostImgLink>
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
      {!isShowModal ? null : author.accountname === LoginData.accountname ? (
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
      {!isShowInnerModal ? null : author.accountname ===
        LoginData.accountname ? (
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
