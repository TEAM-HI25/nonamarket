import Comment from '../../components/Comment/Comment';
import CommentInput from '../../components/CommentInput/CommentInput';
import PostCard from '../../components/common/PostCard/PostCard';
import Nav from '../../components/Nav/Nav';
import * as S from './StyledPostDetail';


function UploadPost() {
  const { accountname, token, username } = useContext(UserContext);
  const [text, setText] = useState("");
  const [imgFile, setImgFile] = useState([]);
  const [imgSrc, setImgSrc] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [profileImg, setProfileImg] = useState("");
  const history = useHistory();
  const formData = new FormData();

const PostDetail = () => {
  return (
    <>
      <Nav type='home' />
      <S.PostCardWrapper>
        <PostCard />
      </S.PostCardWrapper>
      <S.CommentWrapper>
        <Comment />
        <Comment />
      </S.CommentWrapper>
      <CommentInput />
    </>
  );
};

export default PostDetail;
