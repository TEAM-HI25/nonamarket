import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import ProfileImg from '../../components/common/ProfileImg/ProfileImg';
import * as S from './StyledUploadPost';
import { AuthContext } from '../../context/context';

const UploadPost = () => {
  const { user } = useContext(AuthContext);
  const [profileImg, setProfileImg] = useState('');
  const [imgFile, setImgFile] = useState([]); // 파일 객체를 저장할 state
  const [imgUrl, setImgUrl] = useState(''); // 파일 객체의 이미지 url을 저장할 state
  const [imgSrc, setImgSrc] = useState([]);
  const [contentText, setContentText] = useState('');
  const BASE_URL = 'https://mandarin.api.weniv.co.kr';
  const navigate = useNavigate();

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

  // textarea value
  const handleContentText = (e) => {
    setContentText(e.target.value);
  };

  // 이미지 POST 전송 - API 파일로 분리 에정
  const postImgAPI = async (file) => {
    const formData = new FormData();
    formData.append('image', file);

    const response = await fetch(`${BASE_URL}/image/uploadfiles`, {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    return data;
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

    const data = await postImgAPI(imgObject);
    if (data.message === '이미지 파일만 업로드 가능합니다.') {
      // eslint-disable-next-line no-alert
      alert(data.message);
      setImgSrc([...imgSrc]);
    } else {
      setImgSrc([...imgSrc, `${BASE_URL}/${data[0].filename}`]);
      imgRecoding(imgObject);
    }
    console.log(imgSrc);
  };

  // 게시글 생성 (글+이미지 서버에 보내기) - API파일에 분리예정
  const handleUpload = async () => {
    try {
      if (!contentText && imgSrc.length === 0) {
        // eslint-disable-next-line no-alert
        alert('내용 또는 이미지를 입력해주세요.');
      }
      const response = await fetch(`${BASE_URL}/post`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${user.token}`,
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          post: {
            content: contentText,
            image: imgSrc.join(', '),
          },
        }),
      });
      const data = await response.json();
      console.log(data);
      navigate(`/profile/${user.accountname}`);
    } catch (error) {
      console.error(error);
    }
  };

  // 이미지 삭제
  const handelDeleteImg = (idx) => {
    setImgUrl(imgUrl.filter((_, index) => index !== idx));
  };

  return (
    <S.AllWrapper>
      <Nav
        type='upload'
        btnName='업로드'
        disabled={!contentText && !imgUrl}
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
          {imgUrl &&
            imgUrl.map((item, idx) => {
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

export default UploadPost;
