import Nav from '../../components/Nav/Nav';
import basicProfileImg from '../../assets/images/profile-image.svg';
import uploadFile from '../../assets/images/upload-file.svg';
import ProfileImg from '../../components/common/ProfileImg/ProfileImg';
import * as S from './StyledUploadPost';

const UploadPost = () => {
  return (
    <>
      <Nav type='upload' />
      <S.ContentWrapper>
        <ProfileImg size='42px' src={basicProfileImg} alt='프로필이미지' />
        <S.ContentInput id='comment' />
      </S.ContentWrapper>
      <S.ImgUploadBtn type='button'>
        <img src={uploadFile} alt='' />
      </S.ImgUploadBtn>
    </>
  );
};

export default UploadPost;
