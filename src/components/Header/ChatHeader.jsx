import * as S from './StyledHeader';
import MoreImg from '../../assets/images/icon-more-vertical.svg';
import ArrowImg from '../../assets/images/icon-arrow-left.svg';

const ChatNav = () => {
  return (
    <>
      {/* <h2 className='hidden'>채팅 페이지</h2> */}
      <button type='button'>
        <S.BackIcon src={ArrowImg} alt='뒤로가기버튼' />
      </button>
      <S.HeaderTitle>대화 상대 닉네임</S.HeaderTitle>
      <button type='button'>
        <S.MoreIcon src={MoreImg} alt='더보기버튼' />
      </button>
    </>
  );
};

export default ChatNav;
