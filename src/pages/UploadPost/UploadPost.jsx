import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/context';
import postAPI from '../../api/postAPI';
import Nav from '../../components/Nav/Nav';
import ProfileImg from '../../components/common/ProfileImg/ProfileImg';
import * as S from './StyledUploadPost';
import BASE_URL from '../../utils/baseUrl';

const UploadPost = () => {
  const { user } = useContext(AuthContext);
  const [profileImg, setProfileImg] = useState('');
  const [imgFile, setImgFile] = useState([]);
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

  // 이미지 추가 & 미리보기
  const handleChangeFile = async (e) => {
    const imgObject = e.target.files[0];
    setImgFile((prevState) => [...prevState, imgObject]);

    if (imgObject === undefined) return;

    if (imgFile.length > 2) {
      // eslint-disable-next-line no-alert
      alert('이미지는 3장 까지 업로드 가능합니다.');
      return;
    }

    // 서버에 이미지 보내기
    const data = await postAPI.postUploadImgs(imgObject);
    if (data.message === '이미지 파일만 업로드 가능합니다.') {
      // eslint-disable-next-line no-alert
      alert(data.message);
      setImgSrc([...imgSrc]);
    } else {
      setImgSrc([...imgSrc, `${BASE_URL}/${data[0].filename}`]);
    }
  };

  // 게시글 생성 (글+이미지 서버에 보내기)
  const handleUpload = async () => {
    if (!contentText && imgSrc.length === 0) {
      // eslint-disable-next-line no-alert
      alert('내용 또는 이미지를 입력해주세요.');
    }

    postAPI.createPost(user.token, contentText, imgSrc);
    navigate(`/profile/${user.accountname}`);
  };

  // 이미지 삭제
  const handelDeleteImg = (idx) => {
    setImgSrc(imgSrc.filter((_, index) => index !== idx));
  };

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

export default UploadPost;
