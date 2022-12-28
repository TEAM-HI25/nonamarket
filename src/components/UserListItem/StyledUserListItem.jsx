import styled from 'styled-components';

export const ResultList = styled.li`
  a {
    display: flex;
    width: 358px;
    height: 50px;
    cursor: pointer;
    div:nth-child(1) {
      flex-basis: 50px;
    }
    div:nth-child(2) {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 12px;
      gap: 6px;
    }
  }
`;

export const UserprofileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
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
