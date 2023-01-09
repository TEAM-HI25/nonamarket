import { useNavigate } from 'react-router-dom';
import Button from '../common/Button/Button';
import * as S from './StyledProfileInfo';
// import UserProfileBtnWrap from '../common/Button/FollowButton';

const MyProfileBtnWrapp = () => {
  const navigate = useNavigate();
  const handleMove = (e) => {
    if (e.target.innerText === '프로필 수정') {
      navigate('/modifyprofile');
    } else if (e.target.innerText === '상품 등록') {
      navigate('/addproduct');
    }
  };
  return (
    <S.BtnWrapper>
      <Button name='프로필 수정' type='button' size='m' onClick={handleMove} />
      <Button name='상품 등록' type='button' size='m' onClick={handleMove} />
    </S.BtnWrapper>
  );
};
export default MyProfileBtnWrapp;
