import styled from 'styled-components';

export const PostList = styled.div`
  display: block;
  position: relative;
  width: 304px;
  height: 171px;
  border-radius: 10px;
`;

export const PostImg = styled.img.attrs({
  alt: '포스트 이미지 프리뷰',
})`
  display: block;
  width: 304px;
  height: 171px;
  object-fit: cover;
  border-radius: 10px;
`;

export const PostListBtn = styled.button.attrs({
  type: 'button',
})`
  position: absolute;
  top: 5px;
  right: 0;
  background-color: transparent;
`;
