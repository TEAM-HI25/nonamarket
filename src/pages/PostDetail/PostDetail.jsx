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
      setCommentsData(data.comments);
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
