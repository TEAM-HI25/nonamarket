/* eslint-disable react/destructuring-assignment */
import * as S from './StyledImagePreview';
import deleteButton from '../../assets/images/x.svg';

const ImgPreview = (props) => {
  const { postUrl } = props;

  return (
    <>
      {postUrl.map((file, index) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <S.PostList key={index}>
            <S.PostListBtn value={file} onClick={props.onClick}>
              <img
                className='deleteButton'
                src={deleteButton}
                alt='이미지삭제버튼'
              />
            </S.PostListBtn>
            <S.PostImg src={file} />
          </S.PostList>
        );
      })}
    </>
  );
};

export default ImgPreview;
