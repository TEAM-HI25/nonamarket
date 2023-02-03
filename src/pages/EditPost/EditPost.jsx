import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../context/context';
import postAPI from '../../api/postAPI';
import Nav from '../../components/Nav/Nav';
import ProfileImg from '../../components/common/ProfileImg/ProfileImg';
import * as S from './StyledEditPost';
import BASE_URL from '../../utils/baseUrl';

const EditPost = () => {
  const { user } = useContext(AuthContext);
  const { postid } = useParams();
  const [profileImg, setProfileImg] = useState('');
  const [imgFile, setImgFile] = useState([]);
  const [imgUrl, setImgUrl] = useState('');
  const [imgSrc, setImgSrc] = useState([]);
  const [contentText, setContentText] = useState('');
  const navigate = useNavigate();

  // 유저 프로필 이미지 받아오기
  useEffect(() => {
    postAPI
      .getUserProfile(user.token, user.accountname)
      .then((data) => setProfileImg(data.profile.image));
  });

  // textarea 상태
  const handleContentText = (e) => {
    setContentText(e.target.value);
  };

  // 이미지 미리보기
  const handleChangeFile = async (e) => {
    const imgObject = e.target.files[0];
    setImgFile((prevState) => [...prevState, imgObject]);

    if (imgObject === undefined) return;

    if (imgFile.length > 2) {
      // eslint-disable-next-line no-alert
      alert('이미지는 3장 까지 업로드 가능합니다.');
      return;
    }

    const imgRecoding = (file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      e.target.value = '';
      // eslint-disable-next-line consistent-return
      return new Promise((resolve) => {
        reader.onload = () => {
          setImgUrl((imgurl) => [...imgurl, reader.result]);
          resolve();
        };
      });
    };

    // 서버에 이미지 보내기
    const data = await postAPI.postUploadImgs(imgObject);
    if (data.message === '이미지 파일만 업로드 가능합니다.') {
      // eslint-disable-next-line no-alert
      alert(data.message);
      setImgSrc([...imgSrc]);
    } else {
      setImgSrc([...imgSrc, `${BASE_URL}/${data[0].filename}`]);
      imgRecoding(imgObject);
    }
  };

  // 게시글 수정 (수정된 글+이미지 서버에 보내기) - API파일에 분리예정
  const handleUploadPost = async () => {
    if (!contentText && imgSrc.length === 0) {
      // eslint-disable-next-line no-alert
      alert('내용 또는 이미지를 입력해주세요.');
    }

    postAPI.editPost(user.token, postid, contentText, imgSrc);
    navigate(`/profile/${user.accountname}`);
  };

  // 게시글 수정 페이지 접속시 기존 데이터 받아오기
  useEffect(() => {
    const setPost = async () => {
      const data = await postAPI.getPost(user.token, postid);
      setContentText(data.content);

      if (data.image) {
        setImgSrc(data.image.split(','));
      }
    };
    setPost();
  }, []);

  // 이미지 삭제
  const handelDeleteImg = (idx) => {
    setImgSrc(imgSrc.filter((_, index) => index !== idx));
  };

  return (
    <S.AllWrapper>
      <Nav
        type='upload'
        btnName='업로드'
        disabled={!contentText && !imgUrl}
        onClick={handleUploadPost}
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

export default EditPost;
