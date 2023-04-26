import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import postAPI from '../../api/postAPI';
import Comment from '../../components/Comment/Comment';
import CommentInput from '../../components/CommentInput/CommentInput';
import PostCard from '../../components/common/PostCard/PostCard';
import Nav from '../../components/Nav/Nav';
import * as S from './StyledPostDetail';

const PostDetail = () => {
  const { postid } = useParams();
  const [postData, setPostData] = useState();
  const [commentsData, setCommentsData] = useState([]);

  const handleGetComment = async () => {
    try {
      const data = await postAPI.getComment(postid);
      setCommentsData(data.comments);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getPostCard = async () => {
      try {
        const data = await postAPI.getUserPost(postid);
        setPostData(data.post);
      } catch (error) {
        console.log(error);
      }
    };
    getPostCard();
    handleGetComment();
  }, []);

  return (
    <S.AllWrapper>
      <Nav type='home' />
      <S.MainWrapper>
        <h2 className='hidden'>포스트</h2>
        <S.PostCardWrapper>
          {postData && <PostCard data={postData} />}
        </S.PostCardWrapper>
        <S.CommentWrapper>
          {commentsData &&
            commentsData.map((comment) => (
              <Comment
                key={comment.id}
                comment={comment}
                postid={postid}
                handleDelete={handleGetComment}
              />
            ))}
        </S.CommentWrapper>
      </S.MainWrapper>
      <CommentInput postid={postid} setCommentsData={setCommentsData} />
    </S.AllWrapper>
  );
};

export default PostDetail;
