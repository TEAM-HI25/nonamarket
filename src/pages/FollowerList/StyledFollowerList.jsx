import styled from 'styled-components';

export const FollowersNavWrapp = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 16px 8px 12px;
  width: 390px;
  height: 48px;
  background-color: #fff;
  border-bottom: 0.5px solid #dbdbdb;
  img {
    width: 24px;
    height: 24px;
  }
  p {
    margin-left: 8px;
    font-size: 1.4rem;
    line-height: 1.8rem;
  }
`;

export const FollowersSection = styled.section`
  width: 390px;
  height: 712px;
  padding: 24px 16px 0 16px;
  overflow: hidden;
`;
