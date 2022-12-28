import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/context';
import HeartIcon from '../../../assets/images/icon-heart.svg';
import MessageCircleIcon from '../../../assets/images/icon-message-circle-mini.svg';
import verticalMenuIcon from '../../../assets/images/icon-more-vertical.svg';
import MyPostModal from '../Modal/MyPostModal';
import OthersPostModal from '../Modal/OthersPostModal';
import PostInnerModal from '../Modal/PostInnerModal';
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
  const { user } = useContext(AuthContext);
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowInnerModal, setIsShowInnerModal] = useState(false);
  const navigate = useNavigate();
  console.log(hearted);

  const handleShowModal = () => {
    setIsShowModal(true);
  };

  const handleCloseModal = () => {
    setIsShowModal(false);
  };

  const hanldeShowInnerModal = () => {
    setIsShowInnerModal(true);
  };

  const handlCloseInnerModal = () => {
    setIsShowInnerModal(false);
    setIsShowModal(false);
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
          <button type='button'>
            <img src={HeartIcon} alt='좋아요 버튼' />
            <span>{heartCount}</span>
          </button>
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
        <MyPostModal
          CloseModal={handleCloseModal}
          ShowInnerModal={hanldeShowInnerModal}
        />
      ) : (
        <OthersPostModal
          CloseModal={handleCloseModal}
          ShowInnerModal={hanldeShowInnerModal}
        />
      )}
      {/* eslint-disable-next-line no-nested-ternary */}
      {!isShowInnerModal ? null : author.accountname === user.accountname ? (
        <PostInnerModal
          name='삭제'
          CloseInnerModal={handlCloseInnerModal}
          postId={id}
        />
      ) : (
        <PostInnerModal
          name='신고'
          CloseInnerModal={handlCloseInnerModal}
          postId={id}
        />
      )}
    </>
  );
};

export default PostCard;
