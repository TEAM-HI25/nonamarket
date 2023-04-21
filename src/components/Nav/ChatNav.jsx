import * as S from './StyledNav';
import MoreImg from '../../assets/images/icon-more-vertical.svg';
import ArrowImg from '../../assets/images/icon-arrow-left.svg';

const ChatNav = ({ handleReturn, name }) => {
  return (
    <>
      {/* <h2 className='hidden'>채팅 페이지</h2> */}
      <button type='button' onClick={handleReturn}>
        <S.BackIcon src={ArrowImg} alt='뒤로가기버튼' />
      </button>
      <S.HeaderTitle>{name}</S.HeaderTitle>
      <button type='button'>
        <S.MoreIcon src={MoreImg} alt='더보기버튼' />
      </button>
    </>
  );
};

export default ChatNav;
