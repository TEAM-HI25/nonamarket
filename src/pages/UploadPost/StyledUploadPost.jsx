import styled from 'styled-components';
import uploadFile from '../../assets/images/upload-file.svg';

export const ContentWrapper = styled.form.attrs({
  method: 'post',
})`
  display: flex;
  gap: 13px;
  padding: 20px 16px 16px;
`;

export const ContentInput = styled.textarea.attrs({
  rows: '10',
  placeholder: '게시글 입력하기',
})`
  width: 100%;
  font-size: 1.4rem;
  line-height: 1.8rem;
  resize: none;
  border: none;
  padding: 12px 0;
  &::placeholder {
    color: #c4c4c4;
    font-size: 1.4rem;
    line-height: 1.8rem;
    font-family: 'Spoqa Han Sans Neo', sans-serif;
  }
  &:focus {
    outline: none;
  }
`;

export const uploadImgInput = styled.input.attrs({
  type: 'file',
  multiple: true,
  accept: '*.jpg, *.gif, *.png, *.jpeg, *.bmp, *.tif, *.heic',
})`
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  border: 0;
`;

export const ImgUploadBtn = styled.label`
  background: url(${uploadFile});
  position: absolute;
  width: 50px;
  height: 50px;
  right: 16px;
  bottom: 16px;
  cursor: pointer;
`;

export const UploadImageList = styled.div`
  display: flex;
  height: 171px;
  margin: 0 16px 0 70px;
  overflow-x: scroll;
  gap: 8px;
`;
