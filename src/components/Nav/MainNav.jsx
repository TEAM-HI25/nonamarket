import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as S from './StyledNav';
import SearchImg from '../../assets/images/icon-search.svg';

const Title = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

const MainNav = () => {
  return (
    <>
      {/* <h2 className='hidden'>노나먹자 이용자검색</h2> */}
      <Title>노나먹자 피드</Title>
      <Link to='/searchuser'>
        <S.SearchIcon src={SearchImg} alt='돋보기버튼-이용자검색 페이지이동' />
      </Link>
    </>
  );
};

export default MainNav;
