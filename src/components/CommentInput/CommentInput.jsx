import ProfileImg from '../common/ProfileImg/ProfileImg';
import basicProfileImg from '../../assets/images/profile-image.svg';
import * as S from './StyledCommentInput';

const CommentInput = () => {
  return (
    <S.CommentWrapper>
      <ProfileImg size='36px' src={basicProfileImg} alt='프로필이미지' />
      {/* <label htmlFor='comment' className='hidden'>
        댓글입력창
      </label> */}
      <S.CommentInput id='comment' />
      <S.CommentUploadBtn type='button'>게시</S.CommentUploadBtn>
    </S.CommentWrapper>
  );
};

export default CommentInput;
