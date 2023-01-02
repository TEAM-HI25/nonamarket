import styled from 'styled-components';

export const UserFollowContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  cursor: pointer;
  div:nth-child(1) {
    flex-basis: 50px;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
  div:nth-child(2) {
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
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
    button {
      align-self: flex-end;
      flex-shrink: 0;
    }
  }
`;

export default UserFollowContainer;
