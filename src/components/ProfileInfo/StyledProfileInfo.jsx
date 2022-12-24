import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

export const ProfileInfoWrapper = styled.div`
  display: flex;
  gap: 45px;
  margin-top: 30px;
`;

export const NumberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;

  span:nth-child(2) {
    font-weight: 400;
    font-size: 8px;
    color: #767676;
  }
`;

export const NumberOfFollowers = styled.span`
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 23px;
`;

export const NumberOfFollowings = styled(NumberOfFollowers)`
  color: #767676;
`;

export const ProfileImg = styled.img`
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

export const UserName = styled.span`
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 20px;
`;
export const UserId = styled.span`
  margin-top: 6px;
  font-size: 1.2rem;
  color: #767676;
  line-height: 14px;
`;

export const UserIntro = styled.span`
  margin-top: 16px;
  font-size: 1.4rem;
  line-height: 18px;
  color: #767676;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 26px;
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  border: 1px solid #dbdbdb;
  border-radius: 50%;
  background-color: #ffffff;
  img {
    width: 15px;
    height: 15px;
  }
`;
