import * as S from './StyledNotFound';
import Button from '../../components/common/Button/Button';
import Img404 from '../../assets/images/icon-404.svg';

const NotFound = () => {
  return (
    <S.LayOut>
      <img src={Img404} alt='페이지오류안내아이콘' />
      <S.NotFoundMessage>페이지를 찾을 수 없습니다. :(</S.NotFoundMessage>
      <Button type='button' name='이전 페이지' size='m' />
    </S.LayOut>
  );
};

export default NotFound;
