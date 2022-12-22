import styled from 'styled-components';

export const LayOut = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;

export const Main = styled.main`
  flex-grow: 1;
  margin-top: 20px;
  margin-left: 50px;
`;

export const ResultListWrapp = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
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
