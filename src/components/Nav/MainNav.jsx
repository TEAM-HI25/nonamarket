import * as S from './StyledNav';
import SearchImg from '../../assets/images/icon-search.svg';

const MainNav = () => {
  return (
    <>
      <S.Text>노나먹자 피드</S.Text>
      <S.BtnWrapp>
        <S.SearchIcon src={SearchImg} alt='뒤로가기버튼' />
      </S.BtnWrapp>
    </>
  );
};

export default MainNav;
