import { useEffect, useState } from 'react';
import Nav from '../../components/Nav/Nav';
// import basicProfileImg from '../../assets/images/profile-image.svg';
import uploadFile from '../../assets/images/upload-file.svg';
import ProfileImg from '../../components/common/ProfileImg/ProfileImg';
import * as S from './StyledUploadPost';

// let imageFileUrls = [];
// let postId = '';

const UploadPost = () => {
  const [profileImg, setProfileImg] = useState('');
  const BASE_URL = 'https://mandarin.api.weniv.co.kr';

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
        console.log(data);
        setProfileImg(data.profile.image);
      } catch (error) {
        console.error(error);
      }
    };
    getUserProfile();
  });

  return (
    <>
      <Nav type='upload' />
      <S.ContentWrapper>
        <ProfileImg size='42px' src={profileImg} alt='프로필이미지' />
        <S.ContentInput id='comment' />
      </S.ContentWrapper>
      <S.ImgUploadBtn type='button'>
        <img src={uploadFile} alt='' />
      </S.ImgUploadBtn>
    </>
  );
};

export default UploadPost;
