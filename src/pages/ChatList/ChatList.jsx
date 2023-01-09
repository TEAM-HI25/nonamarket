import Nav from '../../components/Nav/Nav';
import ChatUserList from '../../components/UserListItem/ChatUserList';
import TabMenu from '../../components/common/TabMenu/TabMenu';
import * as S from './StyledChatList';

const ChatList = () => {
  return (
    <S.LayOut>
      <Nav type='home' />
      <S.ResultListWrapp>
        <ChatUserList
          name='아나바다정신'
          desc='1+1상품 구매하고 남은 새상품 기름이에요~ 12시까지 오시면...'
          img=''
        />
        <ChatUserList name='노나먹어요' desc='23년 2월까지에요~' img='' />
        <ChatUserList
          name='공구미친자'
          desc='이거 공구기간이 오늘까지라 결정되시면 오늘안에 말씀해주세요'
          img=''
        />
      </S.ResultListWrapp>
      <TabMenu />
    </S.LayOut>
  );
};

export default ChatList;
