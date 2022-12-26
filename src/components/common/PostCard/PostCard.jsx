import HeartIcon from '../../../assets/images/icon-heart.svg';
import MessageCircleIcon from '../../../assets/images/icon-message-circle-mini.svg';
import verticalMenuIcon from '../../../assets/images/icon-more-vertical.svg';
import * as S from './StyledPostCard';

const PostCard = ({ userdata, content, image, date }) => {
  return (
    <S.ContentsWrapper>
      <S.ProfileImage src={userdata.image} alt='프로필 이미지' />
      <S.UserInfo>
        <S.UserName>{userdata.username}</S.UserName>
        <S.UserAccount>@ {userdata.accountname}</S.UserAccount>
        <img src={verticalMenuIcon} alt='더보기 메뉴' />
      </S.UserInfo>

      <S.PostContents>
        <p>{content}</p>
        {image && <img src={image} alt='감귤농장 이미지' />}
      </S.PostContents>

      <S.BtnWrapper>
        <button type='button'>
          <img src={HeartIcon} alt='좋아요 버튼' /> <span>58</span>
        </button>
        <button type='button'>
          <img src={MessageCircleIcon} alt='' /> <span>12</span>
        </button>
      </S.BtnWrapper>
      <S.PostDate>
        {`${date.slice(0, 10).replace('-', '년 ').replace('-', '월 ')}일`}
      </S.PostDate>
    </S.ContentsWrapper>
  );
};

export default PostCard;
