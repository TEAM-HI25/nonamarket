import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import ProfileImg from '../../components/common/ProfileImg/ProfileImg';
import * as S from './StyledEditPost';
import { AuthContext } from '../../context/context';

const EditPost = () => {
  const { user } = useContext(AuthContext);
  const [profileImg, setProfileImg] = useState('');
  const [imgSrc, setImgSrc] = useState('');
  const [contentText, setContentText] = useState('');
  const [imgFile, setImgFile] = useState([]);
  const { postid } = useParams();
  const textRef = useRef();
  const imgRef = useRef();
  const BASE_URL = 'https://mandarin.api.weniv.co.kr';
  const navigate = useNavigate();

  // textarea
  const handleResizeHeight = () => {
    textRef.current.style.height = 'auto';
    textRef.current.style.height = `${textRef.current.scrollHeight}px`;
  };

  // 유저 프로필 이미지 받아오기
  useEffect(() => {
    const getUserProfile = async () => {
      const url = `${BASE_URL}/profile/${user.accountname}`;

      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${user.token}`,
            'Content-type': 'application/json',
          },
        });
        const data = await response.json();
        setProfileImg(data.profile.image);
      } catch (error) {
        console.error(error);
      }
    };
    getUserProfile();
  });

  const handleContentText = (e) => {
    setContentText(e.target.value);
  };

  // 이미지 업로드
  const handleUploadImg = async (e) => {
    const imgInput = e.target.files[0];
    const formData = new FormData();

    setImgFile((imgfile) => [...imgfile, imgInput.name]);
    formData.append('image', imgInput);

    if (imgFile.length > 2) {
      // eslint-disable-next-line no-alert
      alert('이미지는 3장 까지 업로드 가능합니다.');
    }

    try {
      const response = await fetch(`${BASE_URL}/image/uploadfiles`, {
        method: 'POST',
        body: formData,
      });
      console.log(response);

      const data = await response.json();
      console.log(data);

      const imgPreview = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        return new Promise((resolve) => {
          reader.onload = () => {
            setImgSrc([...imgSrc, reader.result]);
            console.log([...imgSrc, reader.result]);
            resolve();
          };
        });
      };

      if (data.message === '이미지 파일만 업로드가 가능합니다.') {
        // eslint-disable-next-line no-alert
        alert(
          '업로드 가능한 확장자: *.jpg, *.gif, *.png, *.jpeg, *.bmp, *.tif, *.heic',
        );
        setImgFile([...imgFile]);
      } else {
        setImgFile([...imgFile, `${BASE_URL}/${data[0].filename}`]);
        imgPreview(imgInput);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const handelDeleteImg = (idx) => {
  //   setImgSrc(imgSrc.filter((_, index) => index !== idx));
  // };

  // 게시글 수정
  const modifyPost = async () => {
    // console.log(imgSrc, 'imgSrc');
    // console.log(imgFile, 'imgFile');
    try {
      if (!contentText && imgFile.length === 0) {
        // eslint-disable-next-line no-alert
        alert('내용 또는 이미지를 입력해주세요.');
      }
      const response = await fetch(`${BASE_URL}/post/${postid}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${user.token}`,
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          post: {
            content: `${contentText}`,
            image: imgFile.join(','),
          },
        }),
      });
      const data = await response.json();
      console.log(data);
      navigate(`/profile/${user.accountname}`);
    } catch (error) {
      console.log(error);
    }
  };

  // 페이지 접속 시 게시글 데이터 불러오기
  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await fetch(`${BASE_URL}/post/${postid}`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
            'Content-type': 'application/json',
          },
        });
        const data = await response.json();
        const postContent = data.post;
        setContentText(postContent.content);
        if (postContent.image) {
          setImgSrc(postContent.image.split(', '));
          setImgFile(postContent.image.split(', '));
        }
        console.log(postContent);
      } catch (error) {
        console.log(error);
      }
    };
    getPost();
  }, []);

  // 이미지 삭제하기
  const handleDeleteImg = (idx) => {
    setImgSrc(imgSrc.filter((_, index) => index !== idx));
  };

  return (
    <S.AllWrapper>
      <Nav
        type='upload'
        btnName='업로드'
        disabled={!contentText && !imgSrc}
        onClick={modifyPost}
      />
      <S.ContentWrapper>
        <ProfileImg size='42px' src={profileImg} alt='프로필이미지' />
        <S.ContentInput
          id='comment'
          value={contentText}
          onInput={handleResizeHeight}
          onChange={handleContentText}
          ref={textRef}
        />
      </S.ContentWrapper>
      <S.ImgUploadBtn htmlFor='imguploadinput' />
      <S.uploadImgInput id='imguploadinput' onChange={handleUploadImg} />
      <S.PostImgWrapper>
        <ul>
          {imgSrc &&
            imgSrc.map((item, idx) => {
              return (
                // eslint-disable-next-line react/no-array-index-key
                <li key={idx} id={idx}>
                  <img src={item} ref={imgRef} alt='이미지' />
                  <button
                    type='button'
                    className='postImg-del'
                    onClick={() => {
                      handleDeleteImg(idx);
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
