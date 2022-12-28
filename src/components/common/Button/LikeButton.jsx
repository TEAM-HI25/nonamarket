import { useState, useContext } from 'react';
import { AuthContext } from '../../../context/context';
import HeartOff from '../../../assets/images/icon-heart.svg';
import HeartOn from '../../../assets/images/heart.svg';

const LikeButton = ({ heartCount, hearted, postId }) => {
  const [isLike, setIsLike] = useState(hearted);
  const [likeCount, setLikeCount] = useState(heartCount);
  const { user } = useContext(AuthContext);

  const handleLikeChange = () => {
    if (isLike === false) {
      const getHeart = async () => {
        const response = await fetch(
          `https://mandarin.api.weniv.co.kr/post/${postId}/heart`,
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${user.token}`,
              'Content-type': 'application/json',
            },
          },
        );
        const data = await response.json();
        setIsLike(data.post.hearted);
        setLikeCount(data.post.heartCount);
      };
      // 리팩토링 시 postId, user.token를 인자로 전달. 25~26번째 줄 코드 함수 밖으로 빼기
      getHeart();
    } else if (isLike === true) {
      const cancelHeart = async () => {
        const response = await fetch(
          `https://mandarin.api.weniv.co.kr/post/${postId}/unheart`,
          {
            method: 'DELETE',
            headers: {
              Authorization: `Bearer ${user.token}`,
              'Content-type': 'application/json',
            },
          },
        );
        const data = await response.json();
        setIsLike(data.post.hearted);
        setLikeCount(data.post.heartCount);
      };
      cancelHeart();
    }
  };
  return (
    <button type='button' onClick={handleLikeChange}>
      <img src={isLike ? HeartOn : HeartOff} alt='좋아요 버튼' />
      <span>{likeCount}</span>
    </button>
  );
};

export default LikeButton;
