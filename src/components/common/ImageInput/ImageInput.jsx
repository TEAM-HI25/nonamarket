import EggProfile from '../../../assets/images/profile-image.svg';
import UploadImgIcon from '../../../assets/images/upload-file.svg';
import ImageInputWrap from './StyledImageInput';
import BASE_IMG from '../../../utils/baseImageUrl';

const ImageInput = (props) => {
  const { className, onChange, img } = props;

  return (
    <ImageInputWrap className={className}>
      <img src={img === BASE_IMG ? EggProfile : img} alt='프로필 이미지' />
      <label htmlFor='profileImg'>
        <img src={UploadImgIcon} alt='프로필 이미지 선택 아이콘' />
      </label>
      <input
        type='file'
        id='profileImg'
        accept='image/*'
        className='hidden'
        onChange={onChange}
      />
    </ImageInputWrap>
  );
};

export default ImageInput;
