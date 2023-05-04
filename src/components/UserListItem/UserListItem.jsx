import { Link } from 'react-router-dom';
import * as S from './StyledUserListItem';
import ProfileImg from '../../assets/images/profile-image-mini.svg';

const UserListItem = ({ name, account, img }) => {
  let image = img;
  if (image.includes('mandarin.api')) {
    image = image.replace('mandarin.api', 'api.mandarin');
  }
  const handleImgError = (e) => {
    e.target.src = ProfileImg;
  };
  return (
    <S.ResultList>
      <Link to={`/Profile/${account}`}>
        <S.UserprofileImg
          src={image}
          alt='유저 프로필 이미지'
          onError={handleImgError}
        />
        <div>
          <S.UserName>{name}</S.UserName>
          <S.UserId>{account}</S.UserId>
        </div>
      </Link>
    </S.ResultList>
  );
};

export default UserListItem;
