import * as S from './StyledNav';
import MoreImg from '../../assets/images/icon-more-vertical.svg';
import ArrowImg from '../../assets/images/icon-arrow-left.svg';

const HomeNav = () => {
  return (
    <>
      <S.BtnWrapp>
        <S.BackIcon src={ArrowImg} alt='뒤로가기버튼' />
      </S.BtnWrapp>
      <S.BtnWrapp>
        <S.MoreIcon src={MoreImg} alt='더보기버튼' />
      </S.BtnWrapp>
    </>
  );
};

export default HomeNav;
