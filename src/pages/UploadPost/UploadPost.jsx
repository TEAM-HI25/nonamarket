import { useContext, useEffect, useState } from 'react';
import Nav from '../../components/Nav/Nav';
import ProfileImg from '../../components/common/ProfileImg/ProfileImg';
import * as S from './StyledUploadPost';
import { AuthContext } from '../../context/context';

const UploadPost = () => {
  const [profileImg, setProfileImg] = useState('');
  const [imgSrc, setImgSrc] = useState('');
  const formData = new FormData();
  const BASE_URL = 'https://mandarin.api.weniv.co.kr';
  // const previewImgUrl = [];
  // 업로드할이미지 url 담는 전역변수
  // const fileUrls = [];
  // eslint-disable-next-line no-unused-vars
  // const [postImgUrl, setPostImgUrl] = useState([]);
  const { user } = useContext(AuthContext);

  // 유저 프로필 이미지 받아오기
  useEffect(() => {
    const getUserProfile = async () => {
      // const token = localStorage.getItem('token');
      // const accountname = localStorage.getItem('accountname');
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
    console.log(formData);

    try {
      const response = await fetch(`${BASE_URL}/image/uploadfiles`, {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      console.log(data);
      const postImgName = data.filename;
      return postImgName;
    } catch (error) {
      console.error(error);
    }
  };
  uploadImg();

  // 이미지 미리보기
  // const handleImgInput = (e) => {
  //   const fileArr = [...e.target.files];
  //   fileArr.forEach((file) => fileUrls.push(file));
  //   console.log(fileUrls);

  //   if (fileUrls.length > 3) {
  //     // eslint-disable-next-line no-alert
  //     alert('이미지는 3개까지 업로드할 수 있습니다.');
  //     fileUrls.pop();
  //   }

  //   for (let i = 0; i < fileArr.length; i += 1) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       previewImgUrl.push(reader.result);
  //       setPostImgUrl([...previewImgUrl]);
  //     };
  //   }
  // };

  const handleUploadImg = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImgSrc(reader.result);
        resolve();
      };
    });
  };

  return (
    <>
      <Nav type='upload' btnName='업로드' />
      <S.ContentWrapper>
        <ProfileImg size='42px' src={profileImg} alt='프로필이미지' />
        <S.ContentInput id='comment' />
      </S.ContentWrapper>
      <S.ImgUploadBtn htmlFor='imguploadinput' />
      <S.uploadImgInput
        id='imguploadinput'
        onChange={(e) => {
          handleUploadImg(e.target.files[0]);
        }}
      />
      <S.UploadImageList>
        {imgSrc && <img src={imgSrc} alt='프리뷰이미지' />}
      </S.UploadImageList>
    </>
  );
};

export default UploadPost;
