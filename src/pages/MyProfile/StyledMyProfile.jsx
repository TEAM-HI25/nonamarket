import styled from 'styled-components';

export const Container = styled.section`
  width: 390px;
  height: 314px;
  border: 0.5px solid #dbdbdb;
`;

export const ProfileInfoWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;

  span:nth-child(2) {
    margin-top: 6px;
    font-weight: 400;
    font-size: 1rem;
    line-height: 12px;
    color: #767676;
  }
`;

export const NumberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const NumberOfFollowers = styled.span`
  margin-top: 65px;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 23px;
`;

export const NumberOfFollowings = styled(NumberOfFollowers)`
  color: #767676;
`;

export const ProfileImg = styled.img`
  margin-top: 30px;
  width: 111px;
  height: 111px;
  border-radius: 50%;
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0 24px 0;
`;

export const UserName = styled.strong`
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 20px;
`;
export const UserId = styled.p`
  margin-top: 6px;
  font-size: 1.2rem;
  color: #767676;
  line-height: 14px;
`;

export const UserDescription = styled.p`
  margin: 16px 0 0 0;
  font-size: 1.4rem;
  line-height: 18px;
  color: #767676;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 0 0 26px 0;
`;

