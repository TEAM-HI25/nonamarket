import { useContext, useEffect, useState } from 'react';
import Nav from '../../components/Nav/Nav';
import ProfileImg from '../../components/common/ProfileImg/ProfileImg';
import * as S from './StyledUploadPost';
import { AuthContext } from '../../context/context';

const UploadPost = () => {
  const [profileImg, setProfileImg] = useState('');
  const [imgSrc, setImgSrc] = useState('');
  const [contentText, setContentText] = useState('');
  const [disabledBtn, setDisabledBtn] = useState('');
  const formData = new FormData();
  const BASE_URL = 'https://mandarin.api.weniv.co.kr';
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

  // 완성된 게시글 업로드
  // const uploadPost = async () => {
  //   const reqData = {
  //     post: {
  //       content: String,
  //       image: String, //"imageurl1, imageurl2" 형식으로
  //     },
  //   };
  //   try {
  //     const response = await fetch(`${BASE_URL}/post`, {
  //       method: 'POST',
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         'Content-type': 'application/json',
  //       },
  //       body: JSON.stringify(reqData),
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const textTest = (e) => {
    setContentText(e.target.value);
    console.log(contentText);
    if (contentText.length > 0) {
      setDisabledBtn('true');
    }
  };

  // refact
  // textarea 자동 높이 조절 기능추가
  // 이미지 3장 업로드 기능 추가

  return (
    <>
      <Nav type='upload' btnName='업로드' disabled={disabledBtn} />
      <S.ContentWrapper>
        <ProfileImg size='42px' src={profileImg} alt='프로필이미지' />
        <S.ContentInput id='comment' value={contentText} onChange={textTest} />
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
