import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContentsWrapper = styled.section`
  position: relative;
  padding: 4px 0 4px 54px;
  width: 358px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ProfileImage = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
`;

export const ProfileWrapper = styled.div`
  flex-direction: row;
  gap: 12px;
`;

export const UserInfo = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  /* button {
    position: absolute;
    width: 18px;
    top: 0;
    right: 0;
    img {
      width: 100%;
    }
  } */
`;

export const UserName = styled.h2`
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 18px;
  color: #000;
`;

export const UserAccount = styled.p`
  font-size: 1.2rem;
  line-height: 1.4rem;
  color: #767676;
`;

export const PostContents = styled.div`
  font-size: 1.4rem;
  line-height: 1.8rem;
  /* gap: 16px; */
  cursor: pointer;

  p {
    color: #000000;
  }

  img {
    width: 304px;
    margin-top: 16px;
    border-radius: 10px;
  }
`;

export const PostImgLink = styled(Link)`
  width: 100%;
  display: flex;
  overflow-x: auto;
  img {
    margin-top: 16px;
    &:not(:first-of-type) {
      margin-left: 8px;
    }
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  img {
    width: 20px;
  }
  button {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 1.2rem;
    line-height: 1.2rem;
    color: #767676;
  }
`;

export const PostDate = styled.p`
  color: #767676;
`;
