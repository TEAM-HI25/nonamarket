import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import commentAPI from '../../api/commentAPI';
import profileAPI from '../../api/profileAPI';
import ProfileImg from '../common/ProfileImg/ProfileImg';
import * as S from './StyledCommentInput';

const CommentInput = ({ postid, handleGetComment, setCommentsData }) => {
  const LoginData = useSelector((state) => state.Login.user);
  const [text, setText] = useState('');
  const [profileImg, setProfileImg] = useState('');
  const [isActive, setIsActive] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleBtnActive = () => {
    setIsActive(text.length > 0);
  };

  // upload Comment
  const handleComment = async (e) => {
    e.preventDefault();

    try {
      commentAPI
        .uploadComment(postid, text)
        .then((data) =>
          setCommentsData((prev) => [{ ...data.comment }, ...prev]),
        );
      setText('');
      handleGetComment();
    } catch (error) {
      console.log(error.message);
    }
  };

  // getUserProfile
  useEffect(() => {
    const getUserProfile = async () => {
      try {
        profileAPI
          .getUserInfo(LoginData.accountname)
          .then((data) => setProfileImg(data.profile.image));
      } catch (error) {
        console.error(error);
      }
    };
    getUserProfile();
  }, []);

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
