import styled from 'styled-components';

export const UserFollowContainer = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  width: 358px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  strong {
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.8rem;
  }
  p {
    margin: 6px 0 6px 0;
    color: #767676;
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
`;

export default UserFollowContainer;
