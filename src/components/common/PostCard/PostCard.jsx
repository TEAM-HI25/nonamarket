import * as S from './StyledPostCard';
import ProfileMiniImg from '../../../assets/images/profile-image-mini.svg';
import PostSampleImg from '../../../assets/images/post-img-example.png';
import HeartIcon from '../../../assets/images/icon-heart.svg';
import MessageCircleIcon from '../../../assets/images/icon-message-circle-mini.svg';
import verticalMenuIcon from '../../../assets/images/icon-more-vertical.svg';

const PostCard = () => {
  return (
    <S.ContentsWrapper>
      <S.ProfileImage src={ProfileMiniImg} alt='프로필 이미지' />
      <S.UserInfo>
        <S.UserName>애월읍 위니브 감귤농장</S.UserName>
        <S.UserAccount>@ weniv_Mandarin</S.UserAccount>
        <img src={verticalMenuIcon} alt='더보기 메뉴' />
      </S.UserInfo>

      <S.PostContents>
        <p>
          옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다.
          이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게
          뛰노는 인생의 힘있다.
        </p>
        <img src={PostSampleImg} alt='감귤농장 이미지' />
      </S.PostContents>
      <S.BtnWrapper>
        <button type='button'>
          <img src={HeartIcon} alt='좋아요 버튼' /> <span>58</span>
        </button>
        <button type='button'>
          <img src={MessageCircleIcon} alt='' /> <span>12</span>
        </button>
      </S.BtnWrapper>
      <S.PostDate>2020년 10월 21일</S.PostDate>
    </S.ContentsWrapper>
  );
};

export default PostCard;
