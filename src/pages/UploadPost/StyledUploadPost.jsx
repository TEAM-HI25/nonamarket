import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  gap: 13px;
  padding: 20px 16px 16px;
`;

export const ContentInput = styled.input.attrs({
  type: 'text',
  placeholder: '게시글 입력하기',
  autoComplete: 'off',
})`
  &::placeholder {
    color: #c4c4c4;
    font-size: 1.4rem;
    font-family: 'Spoqa Han Sans Neo', sans-serif;
  }
  display: block;
  word-break: break-all;
  width: 304px;
  font-size: 1.4rem;
  line-height: 1.75rem;
  border: none;
`;

export const ImgUploadBtn = styled.button`
  position: absolute;
  right: 16px;
  bottom: 16px;
`;
