// import { useNavigate } from 'react-router-dom';
import * as S from './StyledNav';
import MoreImg from '../../assets/images/icon-more-vertical.svg';
import ArrowImg from '../../assets/images/icon-arrow-left.svg';

const HomeNav = ({ handleReturn }) => {
  return (
    <>
      {/* <h2 className='hidden'>뒤로가기,더보기 메뉴</h2> */}
      <button type='button' onClick={handleReturn}>
        <S.BackIcon src={ArrowImg} alt='뒤로가기버튼' />
      </button>
      <button type='button'>
        <S.MoreIcon src={MoreImg} alt='더보기버튼' />
      </button>
    </>
  );
};

export default HomeNav;
