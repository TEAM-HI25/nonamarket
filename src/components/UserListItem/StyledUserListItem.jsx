import styled from 'styled-components';

export const ResultList = styled.li`
  a {
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    display: flex;
    gap: 12px;
    div:nth-child(2) {
      margin-right: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 6px;
    }
  }
`;

export const UserprofileImg = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserBox = styled.div`
  width: 238px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const UserName = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.7rem;
  color: #000;
`;
export const UserId = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.5rem;
  color: #767676;
`;
export const ChatDate = styled.span`
  align-self: flex-end;
  color: #767676;
  flex-shrink: 0;
  font-size: 10px;
  font-weight: 400;
  line-height: 1.5rem;
`;
