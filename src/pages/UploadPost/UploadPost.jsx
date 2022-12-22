import { useEffect, useState } from 'react';
import Nav from '../../components/Nav/Nav';
import ProfileImg from '../../components/common/ProfileImg/ProfileImg';
import * as S from './StyledUploadPost';
// import { AuthContext } from '../../context/context';

const UploadPost = () => {
  // const { token, accountname } = useContext(AuthContext);
  // 이걸 사용하면 왜 이미지가 안불러와지는걸까?
  const [profileImg, setProfileImg] = useState('');
  const formData = new FormData();
  const BASE_URL = 'https://mandarin.api.weniv.co.kr';
  const previewImgUrl = [];
  // 업로드할이미지 url 담는 전역변수
  const fileUrls = [];
  // eslint-disable-next-line no-unused-vars
  const [postImgUrl, setPostImgUrl] = useState([]);

  // 유저 프로필 이미지 받아오기
  useEffect(() => {
    const getUserProfile = async () => {
      const token = localStorage.getItem('token');
      const accountname = localStorage.getItem('accountname');
      const url = `${BASE_URL}/profile/${accountname}`;

      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
          },
        });
        const data = await response.json();
        // console.log(data);
        setProfileImg(data.profile.image);
      } catch (error) {
        console.error(error);
      }
    };
    getUserProfile();
  });

  // 이미지 서버로 보내기
  // eslint-disable-next-line consistent-return
  const uploadImg = async (file) => {
    formData.append('image', file);

    try {
      const response = await fetch(`${BASE_URL}/image/uploadfiles`, {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      const postImgName = data[0].filename;
      return postImgName;
    } catch (error) {
      console.error(error);
    }
  };
  uploadImg();

  // 이미지 미리보기
  const handleImgInput = (e) => {
    const fileArr = [...e.target.files];
    // const fileArr = [...files];
    fileArr.forEach((file) => fileUrls.push(file));

    if (fileUrls.length > 3) {
      // eslint-disable-next-line no-alert
      alert('이미지는 3개까지 업로드할 수 있습니다.');
      return;
    }

    for (let i = 0; i < fileArr.length; i += 1) {
      const reader = new FileReader();
      reader.onload = () => {
        previewImgUrl.push(reader.result);
        setPostImgUrl([...previewImgUrl]);
      };

      reader.readAsDataURL(fileArr[i]);
    }
  };

  return (
    <>
      <Nav type='upload' btnName='업로드' disabled={fileUrls} />
      <S.ContentWrapper>
        <ProfileImg size='42px' src={profileImg} alt='프로필이미지' />
        <S.ContentInput id='comment' />
      </S.ContentWrapper>
      <S.ImgUploadBtn htmlFor='imguploadinput' />
      <S.uploadImgInput id='imguploadinput' onChange={handleImgInput} />
      <S.UploadImageList>{/* <img src={previewImgUrl} /> */}</S.UploadImageList>
    </>
  );
};

export default UploadPost;
