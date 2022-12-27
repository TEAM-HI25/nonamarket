import styled from 'styled-components';

export const CommentWrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 13px 16px;
  border-top: 0.5px solid #dbdbdb;
`;

export const CommentInput = styled.input.attrs({
  type: 'text',
  placeholder: '댓글 입력하기...',
  autoComplete: 'off',
})`
  &::placeholder {
    color: #c4c4c4;
    font-size: 1.4rem;
    font-family: 'Spoqa Han Sans Neo', sans-serif;
  }
  font-size: 1.4rem;
  width: 100%;
  border: none;
`;

export const CommentUploadBtn = styled.button`
  color: #f26e22;
  font-size: 1.4rem;
  line-height: 1.753rem;
  font-weight: 500;
  white-space: nowrap;

  &.disabled {
    pointer-events: none;
    color: #c4c4c4;
  }
`;
