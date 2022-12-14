import * as S from './StyledNav';
import Button from '../common/Button/Button';
import ArrowImg from '../../assets/images/icon-arrow-left.svg';

const UploadNav = () => {
  return (
    <>
      <S.BtnWrapp>
        <S.BackIcon src={ArrowImg} alt='뒤로가기버튼' />
      </S.BtnWrapp>
      <Button name='저장' size='ms' disabled='true' />
    </>
  );
};

export default UploadNav;
