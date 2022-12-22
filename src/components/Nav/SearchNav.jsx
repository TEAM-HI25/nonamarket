import * as S from './StyledNav';
import ArrowImg from '../../assets/images/icon-arrow-left.svg';

const SearchNav = ({ state, handle }) => {
  return (
    <>
      <S.BtnWrapp>
        <S.BackIcon src={ArrowImg} alt='뒤로가기버튼' />
      </S.BtnWrapp>
      <S.StyledInput
        type='text'
        value={state}
        onChange={handle}
        id='search'
        placeholder='계정 검색'
      />
    </>
  );
};

export default SearchNav;
