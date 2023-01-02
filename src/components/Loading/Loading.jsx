import loadingImg from '../../assets/images/loading.gif';

const Loading = () => {
  return (
    <div>
      <img src={loadingImg} alt='로딩중 이미지' />
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
