import { useContext } from 'react';
import { AuthContext } from '../../context/context';
import ProfileImg from '../common/ProfileImg/ProfileImg';
import * as S from './StyledComment';
import verticalIcon from '../../assets/images/icon-more-vertical.svg';

const Comment = ({ comment }) => {
  const { user } = useContext(AuthContext);

  const commentTime = (time) => {
    const uploadTime = Date.parse(time);
    const now = Date.now();
    const gap = (now - uploadTime) / 1000;

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
    <>
      <S.CommentUserInfo>
        <ProfileImg size='36px' src={user.accountname} alt='프로필이미지' />
        <S.UserInfo>
          <strong>서귀포시 무슨 농장</strong>
          <p>· {commentTime(comment.createdAt)}</p>
          <img src={verticalIcon} alt='댓글 수정 메뉴 버튼' />
        </S.UserInfo>
      </S.CommentUserInfo>
      <S.CommentContent>
        안녕하세요. 사진이 너무 멋있어요. 한라봉 언제먹을 수 있나요? 기다리기
        지쳤어요 땡뻘땡뻘..
      </S.CommentContent>
    </>
  );
};

export default Comment;
