import styled from 'styled-components';

export const StyledHomeFeedOn = styled.section`
  padding: 20px 16px 30px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0 auto;
`;

export const StyledHomeFeedOff = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 390px;
  margin: 0 auto;

  img {
    width: 90px;
    margin-bottom: 25px;
  }
  p {
    font-size: 1.4rem;
    line-height: 1.4rem;
    text-align: center;
    color: #767676;
    margin-bottom: 20px;
  }
`;
