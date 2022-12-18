import styled from 'styled-components';

export const LayOut = styled.section`
  margin: 0 auto;
  width: 390px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.main`
  flex-grow: 1;
  margin-top: 20px;
`;

export const ResultListWrapp = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ResultList = styled.li`
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
`;

// export const ProfileWrapp = styled.div`
//   flex-basis: 50px;
// `;
// export const UserNameIdWrapp = styled.div`
//   flex-grow: 1;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   margin-left: 12px;
//   gap: 6px;
// `;

// ResultLIst 내부요소
export const UserprofileImg = styled.img`
  width: 50px;
  height: 50px;
`;
export const UserName = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.7rem;
`;
export const UserId = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.5rem;
  color: #767676;
`;
