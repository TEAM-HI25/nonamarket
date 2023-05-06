import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import profileAPI from '../../api/profileAPI';
import postAPI from '../../api/postAPI';
import Nav from '../Nav/Nav';
import ProfileImg from '../common/ProfileImg/ProfileImg';
import * as S from './StyledPostForm';
import BASE_URL from '../../utils/baseUrl';

const PostForm = ({ editing }) => {
  const LoginData = useSelector((state) => state.Login.user);
  const { postid } = useParams();
  const [profileImg, setProfileImg] = useState('');
  const [imgSrc, setImgSrc] = useState([]);
  const [contentText, setContentText] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    try {
      profileAPI
        .getUserInfo(LoginData.accountname)
        .then((data) => setProfileImg(data.profile.image));
    } catch (error) {
      console.log(error);
    }
  });

  const handleContentText = (e) => {
    setContentText(e.target.value);
  };

  const handleChangeFile = async (e) => {
    const imgObject = e.target.files[0];

    if (imgObject === undefined) return;

    if (imgSrc.length > 2) {
      // eslint-disable-next-line no-alert
      alert('이미지는 3장 까지 업로드 가능합니다.');
      return;
    }

    const data = await postAPI.postUploadImgs(imgObject);
    if (data.message === '이미지 파일만 업로드 가능합니다.') {
      // eslint-disable-next-line no-alert
      alert(data.message);
      setImgSrc([...imgSrc]);
    } else {
      setImgSrc([...imgSrc, `${BASE_URL}/${data[0].filename}`]);
    }
  };

  const handleUpload = async () => {
    if (!contentText && imgSrc.length === 0) {
      // eslint-disable-next-line no-alert
      alert('내용 또는 이미지를 입력해주세요.');
    }

    if (!editing) {
      try {
        postAPI.createPost(contentText, imgSrc);
        navigate(`/profile/${LoginData.accountname}`);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        postAPI.editPost(postid, contentText, imgSrc);
        navigate(`/profile/${LoginData.accountname}`);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handelDeleteImg = (idx) => {
    setImgSrc(imgSrc.filter((_, index) => index !== idx));
  };

  useEffect(() => {
    if (editing) {
      const setPost = async () => {
        const data = await postAPI.getPost(postid);
        setContentText(data.content);

        if (data.image) {
          setImgSrc(data.image.split(','));
        }
      };
      setPost();
    }
  }, []);

  return (
    <S.AllWrapper>
      <Nav
        type='upload'
        btnName='업로드'
        disabled={!contentText && !imgSrc.length}
        onClick={handleUpload}
      />
      <S.ContentWrapper>
        <ProfileImg size='42px' src={profileImg} alt='프로필이미지' />
        <S.ContentInput
          id='comment'
          value={contentText}
          onChange={handleContentText}
        />
      </S.ContentWrapper>
      <S.ImgUploadBtn htmlFor='imguploadinput' />
      <S.uploadImgInput id='imguploadinput' onChange={handleChangeFile} />
      <S.PostImgWrapper>
        <ul>
          {imgSrc &&
            imgSrc.map((item, idx) => {
              return (
                // eslint-disable-next-line react/no-array-index-key
                <li key={idx} id={idx}>
                  <img src={item} alt='이미지프리뷰' />
                  <button
                    type='button'
                    className='postImg-del'
                    onClick={() => {
                      handelDeleteImg(idx);
                    }}
                  >
                    <span className='hidden'>이미지삭제버튼</span>
                  </button>
                </li>
              );
            })}
        </ul>
      </S.PostImgWrapper>
    </S.AllWrapper>
  );
};

export default PostForm;
