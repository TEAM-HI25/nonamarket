// import { useContext } from 'react';
// import { AuthContext } from '../../context/context';
import ProfileImg from '../common/ProfileImg/ProfileImg';
import * as S from './StyledComment';
import verticalIcon from '../../assets/images/icon-more-vertical.svg';

const Comment = ({ commentsData }) => {
  // const { user } = useContext(AuthContext);
  console.log(commentsData);

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
    <S.CommentListWrapper>
      <S.CommentListContainer>
        {commentsData &&
          commentsData.map((comment) => {
            return (
              <li key={comment.id}>
                <S.CommentUserInfo>
                  <ProfileImg
                    size='36px'
                    src={comment.author.image}
                    alt='프로필이미지'
                  />
                  <S.UserInfo>
                    <strong>{comment.author.username}</strong>
                    <p>· {commentTime(comment.createAt)}</p>
                    <img src={verticalIcon} alt='댓글 수정 메뉴 버튼' />
                  </S.UserInfo>
                </S.CommentUserInfo>
                <S.CommentContent>{comment.content}</S.CommentContent>
              </li>
            );
          })}
      </S.CommentListContainer>
    </S.CommentListWrapper>
  );
};

export default Comment;
