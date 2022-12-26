import { useContext, useState } from 'react';
import { AuthContext } from '../../../context/context';
import HeartIcon from '../../../assets/images/icon-heart.svg';
import MessageCircleIcon from '../../../assets/images/icon-message-circle-mini.svg';
import verticalMenuIcon from '../../../assets/images/icon-more-vertical.svg';
import MyPostModal from '../Modal/MyPostModal';
import OthersPostModal from '../Modal/OthersPostModal';
import PostInnerModal from '../Modal/PostInnerModal';
import * as S from './StyledPostCard';

const PostCard = ({ userdata, content, image, date, postId }) => {
  const { user } = useContext(AuthContext);
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowInnerModal, setIsShowInnerModal] = useState(false);

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

  return (
    <>
      <S.ContentsWrapper>
        <S.ProfileImage src={userdata.image} alt='프로필 이미지' />
        <S.UserInfo>
          <S.UserName>{userdata.username}</S.UserName>
          <S.UserAccount>@ {userdata.accountname}</S.UserAccount>
          <button type='button' onClick={handleShowModal}>
            <img src={verticalMenuIcon} alt='더보기 메뉴' />
          </button>
        </S.UserInfo>

        <S.PostContents>
          <p>{content}</p>
          {image && <img src={image} alt='감귤농장 이미지' />}
        </S.PostContents>

        <S.BtnWrapper>
          <button type='button'>
            <img src={HeartIcon} alt='좋아요 버튼' /> <span>58</span>
          </button>
          <button type='button'>
            <img src={MessageCircleIcon} alt='' /> <span>12</span>
          </button>
        </S.BtnWrapper>
        <S.PostDate>
          {`${date.slice(0, 10).replace('-', '년 ').replace('-', '월 ')}일`}
        </S.PostDate>
      </S.ContentsWrapper>
      {/* eslint-disable-next-line no-nested-ternary */}
      {!isShowModal ? null : userdata.accountname === user.accountname ? (
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
      {!isShowInnerModal ? null : userdata.accountname === user.accountname ? (
        <PostInnerModal
          name='삭제'
          CloseInnerModal={handlCloseInnerModal}
          postId={postId}
        />
      ) : (
        <PostInnerModal
          name='신고'
          CloseInnerModal={handlCloseInnerModal}
          postId={postId}
        />
      )}
    </>
  );
};

export default PostCard;
