import Comment from '../../components/Comment/Comment';
import CommentInput from '../../components/CommentInput/CommentInput';
// import PostCard from '../../components/common/PostCard/PostCard';
import Nav from '../../components/Nav/Nav';
import * as S from './StyledPostDetail';

const PostDetail = () => {
  return (
    <>
      <Nav type='home' />
      {/* <S.PostCardWrapper>
        <PostCard />
      </S.PostCardWrapper> */}
      <S.CommentWrapper>
        <Comment />
        <Comment />
      </S.CommentWrapper>
      <CommentInput />
    </>
  );
};

export default PostDetail;
