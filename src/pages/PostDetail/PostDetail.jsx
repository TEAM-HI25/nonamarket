import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../../components/Comment/Comment';
import CommentInput from '../../components/CommentInput/CommentInput';
import PostCard from '../../components/common/PostCard/PostCard';
import Nav from '../../components/Nav/Nav';
import { AuthContext } from '../../context/context';
import * as S from './StyledPostDetail';

const PostDetail = () => {
  const { user } = useContext(AuthContext);
  const [postData, setPostData] = useState();
  const [commentsData, setCommentsData] = useState([]);
  const { postid } = useParams();
  const BASE_URL = 'https://mandarin.api.weniv.co.kr';

  // 댓글 업데이트
  const handleGetComment = async () => {
    try {
      const response = await fetch(`${BASE_URL}/post/${postid}/comments`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${user.token}`,
          'Content-type': 'application/json',
        },
      });
      const data = await response.json();
      console.log(data);
      setCommentsData(data.comments);
      // setCommentsData(data.comments.reverse());
      console.log(commentsData);
    } catch (error) {
      console.log(error);
    }
  };

  // 게시글 정보 가져오기
  useEffect(() => {
    const getPostCard = async () => {
      try {
        const response = await fetch(`${BASE_URL}/post/${postid}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${user.token}`,
            'Content-type': 'application/json',
          },
        });
        const data = await response.json();
        setPostData(data.post);
      } catch (error) {
        console.log(error);
      }
    };
    getPostCard();
    handleGetComment();
  }, []);

  console.log(postData);

  // userdata={'postData'.author}
  // image={postData.image}
  // content={postData.content}
  // date={postData.createdAt}
  // postId={postData.id}
  // heartCount={postData.heartCount}
  // commentCount={postData.commentCount}

  return (
    <>
      <Nav type='home' />
      <h2 className='hidden'>포스트</h2>
      <S.PostCardWrapper>
        {postData && (
          <PostCard
            userdata={postData.author}
            image={postData.image}
            content={postData.content}
            date={postData.createdAt}
            postId={postData.id}
            heartCount={postData.heartCount}
            commentCount={postData.commentCount}
          />
        )}
      </S.PostCardWrapper>
      <S.CommentWrapper>
        <Comment commentsData={commentsData} />
      </S.CommentWrapper>
      <CommentInput
        postid={postid}
        // handleGetComment={handleGetComment}
        setCommentsData={setCommentsData}
      />
    </>
  );
};

export default PostDetail;
