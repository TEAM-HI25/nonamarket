import { useState, useEffect, useRef } from 'react';
import Nav from '../../components/Nav/Nav';
import TabMenu from '../../components/common/TabMenu/TabMenu';
import UserListItem from '../../components/UserListItem/UserListItem';
import searchAPI from '../../api/searchAPI';
import * as S from './StyledSearchUser';

const SearchUser = () => {
  const [keyword, setKeyword] = useState('');
  const [userData, setUserData] = useState([]);
  const [pieceUserData, setPieceUserData] = useState([]);
  const [index, setIndex] = useState(0);
  const targetObserve = useRef(null);

  const handleUpdateKeyword = (event) => {
    if (event.target.value === '') {
      setUserData([]);
      setPieceUserData([]);
    }
    setKeyword(event.target.value);
  };

  const callbackFunction = (entries) => {
    if (userData.length > index && entries[0].isIntersecting) {
      setIndex(index + 15);
    }
  };

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  // 키워드가 있을때 api통신을 보내는 함수
  const onSearch = () => {
    if (keyword) {
      const getUserData = async () => {
        const data = await searchAPI.searchUser(keyword);
        setIndex(15);
        setPieceUserData([]);
        setUserData(data);
      };
      getUserData();
    }
  };

  // 디바운스, 유저 데이터 받아오기
  useEffect(() => {
    const debounce = setTimeout(() => {
      onSearch();
    }, 400);

    return () => {
      clearTimeout(debounce);
    };
  }, [keyword]);

  // 무한스크롤을 위한 옵저버 생성
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (targetObserve.current) {
      observer.observe(targetObserve.current);
    }
    return () => {
      if (targetObserve.current) {
        observer.unobserve(targetObserve.current);
      }
    };
  }, [targetObserve, options]);

  // 화면에 보여줄 데이터 가공
  useEffect(() => {
    const renderData = [...pieceUserData];
    renderData.push(...userData.slice(index - 15, index));
    setPieceUserData(renderData);
  }, [userData, index]);

  return (
    <S.LayOut>
      <Nav type='search' state={keyword} handle={handleUpdateKeyword} />
      <S.Main>
        <S.ResultListWrapp>
          {pieceUserData.map((item) => (
            <UserListItem
              key={item.accountname}
              name={item.username}
              account={item.accountname}
              img={item.image}
            />
          ))}
          <li ref={targetObserve} />
        </S.ResultListWrapp>
      </S.Main>
      <TabMenu />
    </S.LayOut>
  );
};

export default SearchUser;
