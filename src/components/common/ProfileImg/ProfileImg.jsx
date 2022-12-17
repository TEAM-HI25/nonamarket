import StyledProfileImg from './StyledProfileImg';

const ProfileImg = ({ size, src, alt }) => {
  return <StyledProfileImg size={size} src={src} alt={alt} />;
};

ProfileImg.defaultProps = {
  src: '../assets/images/profile-img.svg',
};

export default ProfileImg;
