import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/context';
import FetchApi from '../../api';
import Nav from '../../components/Nav/Nav';
import TabMenu from '../../components/common/TabMenu/TabMenu';
import UserListItem from '../../components/UserListItem/UserListItem';
import * as S from './StyledSearchUser';

const SearchUser = () => {
  const [keyword, setKeyword] = useState('');
  const [userData, setUserData] = useState([]);
  const { user } = useContext(AuthContext);

  const handleUpdateKeyword = (event) => {
    if (event.target.value === '') {
      setUserData([]);
    }
    setKeyword(event.target.value);
  };

  useEffect(() => {
    if (keyword) {
      const getUserData = async () => {
        const data = await FetchApi.searchUser(keyword, user.token);
        setUserData(data);
      };
      getUserData();
    }
  }, [keyword]);

  return (
    <S.LayOut>
      <Nav type='search' state={keyword} handle={handleUpdateKeyword} />
      <S.Main>
        <S.ResultListWrapp>
          {userData.map((item) => (
            <UserListItem
              // eslint-disable-next-line no-underscore-dangle
              key={item._id}
              name={item.username}
              account={item.accountname}
              img={item.image}
            />
          ))}
        </S.ResultListWrapp>
      </S.Main>
      <TabMenu />
    </S.LayOut>
  );
};

export default SearchUser;
