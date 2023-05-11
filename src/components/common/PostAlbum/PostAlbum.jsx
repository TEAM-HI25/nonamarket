const PostAlbum = ({ data }) => {
  console.log(data);
  const { image } = data;
  return (
    <li>
      <img src={image} alt='사진입니다.' />
    </li>
  );
};
export default PostAlbum;
