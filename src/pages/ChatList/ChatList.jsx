import chatData from './chatData.json';
import Nav from '../../components/Nav/Nav';
import ChatUserList from '../../components/UserListItem/ChatUserList';
import TabMenu from '../../components/common/TabMenu/TabMenu';
import * as S from './StyledChatList';

const ChatList = () => {
  return (
    <S.LayOut>
      <Nav type='home' />
      <S.ResultListWrapp>
        {chatData.chatData.map((data) => {
          return (
            <ChatUserList
              key={data.id}
              chatid={data.id}
              name={data.userName}
              desc={data.message}
              time={data.date}
            />
          );
        })}
      </S.ResultListWrapp>
      <TabMenu />
    </S.LayOut>
  );
};

export default ChatList;
