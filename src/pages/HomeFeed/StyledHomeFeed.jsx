import styled from 'styled-components';
import { AllWrappCss, MainWrappCss } from '../../styles/Globalstyled';

export const StyledHomeFeedOn = styled.section`
  ${MainWrappCss};
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 20px 16px 30px;
  margin: 0 auto;
  background-color: var(--main-text-color);
`;

export const StyledHomeFeedOff = styled.section`
  ${MainWrappCss};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 390px;
  margin: 0 auto;
  background-color: var(--main-text-color);

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 150px;
    margin-bottom: 25px;
  }

  p {
    font-size: 1.4rem;
    line-height: 1.4rem;
    color: #767676;
    margin-bottom: 20px;
  }
`;

export const AllWrapp = styled.section`
  ${AllWrappCss};
`;

export const MainContWrapp = styled.section`
  ${MainWrappCss};
`;
