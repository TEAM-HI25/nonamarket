import EggProfile from '../../../assets/images/profile-image.svg';
import UploadImgIcon from '../../../assets/images/upload-file.svg';
import ImageInputWrap from './StyledImageInput';

const ImageInput = (props) => {
  const { className, onChange } = props;

  return (
    <ImageInputWrap className={className}>
      <img src={EggProfile} alt='프로필 이미지' />
      <label htmlFor='profileImg'>
        <img src={UploadImgIcon} alt='프로필 이미지 선택 아이콘' />
      </label>
      <input
        type='file'
        id='profileImg'
        className='hidden'
        onChange={onChange}
      />
    </ImageInputWrap>
  );
};

export default ImageInput;
