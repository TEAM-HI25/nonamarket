import * as S from './StyledNav';
import ArrowImg from '../../assets/images/icon-arrow-left.svg';

const SearchNav = () => {
  return (
    <>
      <S.BtnWrapp>
        <S.BackIcon src={ArrowImg} alt='뒤로가기버튼' />
      </S.BtnWrapp>
      <S.StyledInput type='text' id='search' placeholder='계정 검색' />
    </>
  );
};

export default SearchNav;
