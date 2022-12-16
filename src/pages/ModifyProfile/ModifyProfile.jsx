import Nav from '../../components/Nav/Nav';
import * as S from './StyledModifyProfile';
import profileImg from '../../assets/images/profile-image.svg';

const ModifyProfile = () => {
  return (
    <S.LayOut>
      <h1 className='hidden'>프로필 수정 페이지</h1>
      <Nav type='upload' />
      <S.FormWrapp>
        <S.ProfileImgWrapp>
          <img src={profileImg} alt='프로필사진' />
          <label htmlFor='이미지업로드' />
          <input className='hidden' type='file' id='이미지업로드' />
        </S.ProfileImgWrapp>
        <S.LabelInputWrapp>
          <S.Label htmlFor='사용자이름'>사용자 이름</S.Label>
          <input
            type='text'
            id='사용자이름'
            placeholder='2~10자 이내여야 합니다.'
          />
        </S.LabelInputWrapp>
        <S.LabelInputWrapp>
          <S.Label htmlFor='계정ID'>계정 ID</S.Label>
          <input type='text' id='계정ID' placeholder='영문, 숫자, 특수문자' />
        </S.LabelInputWrapp>
        <S.LabelInputWrapp>
          <S.Label htmlFor='소개'>소개</S.Label>
          <input
            type='text'
            id='소개'
            placeholder='자신과 판매할 상품에 대해 소개해주세요'
          />
        </S.LabelInputWrapp>
      </S.FormWrapp>
    </S.LayOut>
  );
};

export default ModifyProfile;
