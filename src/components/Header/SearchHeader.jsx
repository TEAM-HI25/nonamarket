import * as S from './StyledHeader';
import ArrowImg from '../../assets/images/icon-arrow-left.svg';

const SearchNav = () => {
  return (
    <>
      {/* <h2 className='hidden'>검색입력</h2> */}
      <button type='button'>
        <S.BackIcon src={ArrowImg} alt='뒤로가기버튼' />
      </button>
      <S.StyledInput type='text' id='search' placeholder='계정 검색' />
    </>
  );
};

export default SearchNav;
