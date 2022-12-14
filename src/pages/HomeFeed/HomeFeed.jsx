import Button from '../../components/common/Button/Button';
import PostCard from '../../components/common/PostCard/PostCard';
import * as S from './StyledHomeFeed';
import symbolLogoMini from '../../assets/images/symbol-logo-mini.svg';

const HomeFeed = () => {
  // followerPost.length > 0 ? (메인1) : (메인2)
  // 로직추가시 삼항연산자를 사용하여 메인1을 보여주거나, 메인2를 보여주기
  // 로직추가 후 스타일 일부 수정 필요
  return (
    <>
      <header />
      {/* // 메인1 */}
      <main>
        <S.StyledHomeFeedOn>
          <h2 className='hidden'>피드 리스트</h2>
          {/* {followerPost.map((file, index) => {
            return ( */}
          <PostCard />
          <PostCard />
        </S.StyledHomeFeedOn>
        <footer />
      </main>
      {/* 메인2 */}
      <main>
        <S.StyledHomeFeedOff>
          <img src={symbolLogoMini} alt='심볼로고' />
          <p>유저를 검색해 팔로우 해보세요!</p>
          <Button name='검색하기' type='button' size='m' />
        </S.StyledHomeFeedOff>
      </main>
    </>
  );
};

export default HomeFeed;
