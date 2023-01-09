import EggProfile from '../../../assets/images/profile-image.svg';
import UploadImgIcon from '../../../assets/images/upload-file.svg';
import ImageInputWrap from './StyledImageInput';

const ImageInput = (props) => {
  const { className, onChange, img } = props;
  const BASE_IMG = 'https://mandarin.api.weniv.co.kr/1671553289850.png';
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
