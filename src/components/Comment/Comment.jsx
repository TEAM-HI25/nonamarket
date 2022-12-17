import ProfileImg from '../common/ProfileImg/ProfileImg';
import basicProfileImg from '../../assets/images/profile-image.svg';
import * as S from './StyledComment';
import verticalIcon from '../../assets/images/icon-more-vertical.svg';

const Comment = () => {
  return (
    <>
      <S.CommentUserInfo>
        <ProfileImg size='36px' src={basicProfileImg} alt='프로필이미지' />
        <S.UserInfo>
          <strong>서귀포시 무슨 농장</strong>
          <p>· 5분 전</p>
          <img src={verticalIcon} alt='댓글 수정 메뉴 버튼' />
        </S.UserInfo>
      </S.CommentUserInfo>
      <S.CommentContent>
        안녕하세요. 사진이 너무 멋있어요. 한라봉 언제먹을 수 있나요? 기다리기
        지쳤어요 땡뻘땡뻘..
      </S.CommentContent>
    </>
  );
};

export default Comment;
