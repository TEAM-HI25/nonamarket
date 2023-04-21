import styled from 'styled-components';

export const CommentListWrapper = styled.section`
  width: 355px;
`;

export const CommentUserInfo = styled.div`
  display: flex;
  gap: 12px;
  position: relative;
`;

export const UserInfo = styled.div`
  display: flex;
  gap: 6px;
  padding-top: 6px;
  text-align: center;

  strong {
    font-size: 1.4rem;
    font-weight: 500;
  }

  p {
    color: #767676;
    padding-top: 2.5px;
  }

  img {
    position: absolute;
    right: 2px;
    top: 2px;
    width: 20px;
  }
`;

export const CommentContent = styled.p`
  padding: 4px 0 0 48px;
  margin-bottom: 16px;
  font-size: 1.4rem;
  line-height: 1.75rem;
  color: #333333;
`;
