import Nav from '../../components/Nav/Nav';
import * as S from './StyledModifyProfile';
import profileImg from '../../assets/images/profile-image.svg';
import LabelInput from '../../components/common/LabelInput/LabelInput';

const ModifyProfile = () => {
  return (
    <S.AllWrapp>
      <h1 className='hidden'>프로필 수정 페이지</h1>
      <Nav type='upload' btnName='저장' />
      <S.FormWrapp>
        <S.ProfileImgWrapp>
          <img src={profileImg} alt='프로필사진' />
          <label htmlFor='이미지업로드' />
          <input className='hidden' type='file' id='이미지업로드' />
        </S.ProfileImgWrapp>
        <LabelInput
          type='text'
          label='사용자 이름'
          forid='username'
          placeholder='2~10자 이내여야 합니다.'
        />
        <LabelInput
          type='text'
          label='계정 ID'
          forid='userid'
          placeholder='영문, 숫자, 특수문자'
        />
        <LabelInput
          type='text'
          label='소개'
          forid='introduce'
          placeholder='자신과 판매할 상품에 대해 소개해주세요.'
        />
      </S.FormWrapp>
    </S.AllWrapp>
  );
};

export default ModifyProfile;
