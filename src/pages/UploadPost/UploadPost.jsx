import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import ProfileImg from '../../components/common/ProfileImg/ProfileImg';
import * as S from './StyledUploadPost';
import { AuthContext } from '../../context/context';
import FetchApi from '../../api';

const UploadPost = () => {
  const [profileImg, setProfileImg] = useState('');
  const [imgSrc, setImgSrc] = useState('');
  const [contentText, setContentText] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const { user } = useContext(AuthContext);
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

  // 이미지 서버로 보내기
  const handleGetImg = async (e) => {
    const data = await FetchApi.uploadImg(e);
    console.log(data);
    setImgUrl(data);
  };

  // 이미지 미리보기
  const handleUploadImg = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImgSrc(reader.result);
        resolve();
      };
    });
  };

  const handleContentText = (e) => {
    setContentText(e.target.value);
    console.log(typeof contentText);
  };

  // 업로드 클릭시 포스트글 서버에 보내기 (텍스트 + 이미지)
  const handleUpload = async () => {
    try {
      const response = await fetch(`${BASE_URL}/post`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${user.token}`,
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          post: {
            content: contentText,
            image: imgUrl,
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

  // 이미지 삭제버튼
  // const handleDeleteImg = (e) => {
  //   console.log(e.target);
  // };

  // ** refactoring List
  // 1. textarea 자동 높이 조절 기능추가
  // 2. 이미지 3장 업로드 기능 추가 + 이미지 삭제 구현하기

  return (
    <>
      <Nav
        type='upload'
        btnName='업로드'
        disabled={!contentText && !imgSrc}
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
      <S.uploadImgInput
        id='imguploadinput'
        onChange={(e) => {
          handleUploadImg(e.target.files[0]);
          handleGetImg(e);
        }}
      />
      <S.UploadImageList>
        {imgSrc && <img src={imgSrc} alt='프리뷰이미지' />}
        <button type='button' aria-label='Save' />
      </S.UploadImageList>
    </>
  );
};

export default UploadPost;
