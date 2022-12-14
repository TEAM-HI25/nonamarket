import styled from 'styled-components';
import * as S from './StyledNav';
import MoreImg from '../../assets/images/icon- more-vertical.svg';
import ArrowImg from '../../assets/images/icon-arrow-left.svg';

const Text = styled.span`
  flex-grow: 2;
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  margin-left: 10px;
`;

const ChatNav = () => {
  return (
    <>
      <S.BtnWrapp>
        <S.BackIcon src={ArrowImg} alt='뒤로가기버튼' />
      </S.BtnWrapp>
      <Text>대화 상대 닉네임</Text>
      <S.BtnWrapp>
        <S.MoreIcon src={MoreImg} alt='더보기버튼' />
      </S.BtnWrapp>
    </>
  );
};

export default ChatNav;
