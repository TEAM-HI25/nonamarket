import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/context';
import Button from '../../components/common/Button/Button';
import PostCard from '../../components/common/PostCard/PostCard';
import symbolLogoMini from '../../assets/images/symbol-logo-mini.svg';
import TabMenu from '../../components/common/TabMenu/TabMenu';
import Nav from '../../components/Nav/Nav';
import FetchApi from '../../api';
import * as S from './StyledHomeFeed';

const HomeFeed = () => {
  const [feed, setFeed] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const setHomeFeed = async () => {
      const data = await FetchApi.loadFeed(user.token);
      setFeed(data.posts);
      setIsLoading(false);
    };
    setHomeFeed();
  }, []);

  const handleGoSearch = () => {
    navigate('/searchuser');
  };

  return (
    <S.AllWrapp>
      <Nav type='main' />
      {/* eslint-disable-next-line no-nested-ternary */}
      {isloading ? null : feed.length > 0 ? (
        <S.StyledHomeFeedOn>
          <h2 className='hidden'>피드 리스트</h2>
          {feed.map((item) => (
            <PostCard
              key={item.id}
              userdata={item.author}
              content={item.content}
              image={item.image}
              date={item.createdAt}
              postId={item.id}
            />
          ))}
        </S.StyledHomeFeedOn>
      ) : (
        <S.StyledHomeFeedOff>
          <img src={symbolLogoMini} alt='심볼로고' />
          <p>유저를 검색해 팔로우 해보세요!</p>
          <Button
            name='검색하기'
            type='button'
            size='m'
            onClick={handleGoSearch}
          />
        </S.StyledHomeFeedOff>
      )}
      <TabMenu />
    </S.AllWrapp>
  );
};

export default HomeFeed;
