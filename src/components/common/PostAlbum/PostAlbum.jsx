const PostAlbum = ({ data }) => {
  const {
    // author,
    // content,
    image,
    // createdAt,
    // id,
    // heartCount,
    // hearted,
    // commentCount,
  } = data;
  return (
    <li>
      <img src={image} alt='사진입니다.' />
    </li>
  );
};
export default PostAlbum;
