import * as S from './StyledHeader';
import ArrowImg from '../../assets/images/icon-arrow-left.svg';

const FollowersHeader = () => {
  return (
    <>
      {/* <h2 className='hidden'>팔로워 목록 페이지</h2> */}
      <button type='button'>
        <S.BackIcon src={ArrowImg} alt='뒤로가기버튼' />
      </button>
      <S.HeaderTitle>Followers</S.HeaderTitle>
    </>
  );
};

export default FollowersHeader;
