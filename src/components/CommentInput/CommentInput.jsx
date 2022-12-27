import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/context';
import ProfileImg from '../common/ProfileImg/ProfileImg';
import * as S from './StyledCommentInput';
// import { useParams } from 'react-router-dom';

const CommentInput = () => {
  const { user } = useContext(AuthContext);
  const [text, setText] = useState('');
  const [profileImg, setProfileImg] = useState('');
  const [isActive, setIsActive] = useState(false);
  // const { post_id } = useParams();
  const BASE_URL = 'https://mandarin.api.weniv.co.kr';

  // 댓글 input value 받아오기
  const handleChange = (e) => {
    setText(e.target.value);
  };

  // 게시 버튼 활성화
  const handleBtnActive = () => {
    setIsActive(text.length > 0);
  };

  // API - 댓글 POST 요청
  // 리팩토링시 api폴더로 옮기기
  const handleComment = async (e) => {
    e.preventdefault();

    try {
      const response = await fetch(`${BASE_URL}/post/:post_id/comments`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${user.token}`,
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          comment: {
            content: text,
          },
        }),
      });
      const data = await response.json();
      console.log(data);
      setText('');
    } catch (error) {
      console.log(error.message);
    }
  };

  // API - 유저 프로필 이미지 받아오기
  // 리팩토링시 api폴더로 옮기기
  useEffect(() => {
    const getUserProfile = async () => {
      const url = `${BASE_URL}/profile/${user.accountname}`;

      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${user.token}`,
            'Content-type': 'application/json',
          },
        });
        const data = await response.json();
        setProfileImg(data.profile.image);
      } catch (error) {
        console.error(error);
      }
    };
    getUserProfile();
  });

  return (
    <S.CommentWrapper onSubmit={handleComment}>
      <ProfileImg size='36px' src={profileImg} alt='프로필이미지' />
      <label htmlFor='comment' className='hidden'>
        댓글입력창
      </label>
      <S.CommentInput
        id='comment'
        value={text}
        onChange={handleChange}
        onKeyUp={handleBtnActive}
      />
      <S.CommentUploadBtn type='submit' className={!isActive ? 'disabled' : ''}>
        게시
      </S.CommentUploadBtn>
    </S.CommentWrapper>
  );
};

export default CommentInput;
