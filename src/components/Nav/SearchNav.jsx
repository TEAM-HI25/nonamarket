import { Link } from 'react-router-dom';
import * as S from './StyledNav';
import ArrowImg from '../../assets/images/icon-arrow-left.svg';

const SearchNav = ({ state, handle }) => {
  return (
    <>
      {/* <h2 className='hidden'>검색입력</h2> */}
      <S.HeaderWrapp>
        <Link to='/homefeed'>
          <S.BackIcon src={ArrowImg} alt='뒤로가기버튼' />
        </Link>
      </S.HeaderWrapp>
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
