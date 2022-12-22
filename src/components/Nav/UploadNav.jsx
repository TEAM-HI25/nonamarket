import * as S from './StyledNav';
import Button from '../common/Button/Button';
import ArrowImg from '../../assets/images/icon-arrow-left.svg';

const UploadNav = ({ btnName, disabled }) => {
  return (
    <>
      <S.BtnWrapp>
        <S.BackIcon src={ArrowImg} alt='뒤로가기버튼' />
      </S.BtnWrapp>
      <Button name={btnName} size='ms' disabled={disabled} />
    </>
  );
};

export default UploadNav;
