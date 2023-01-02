import loadingImg from '../../assets/images/loading.gif';
import LoadingWrap from './StyledLoading';

const Loading = () => {
  return (
    <LoadingWrap>
      <img src={loadingImg} alt='로딩중 이미지' />
      <p>Loading...</p>
    </LoadingWrap>
  );
};

export default Loading;
