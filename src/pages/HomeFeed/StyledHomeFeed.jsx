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
  flex-direction: column;
  align-items: center;
  width: 390px;
  margin: 0 auto;
  background-color: var(--main-text-color);
  //body backgroundcolor 구분하려고 넣었습니다.
  img {
    width: 150px;
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

// 추가해야할 스타일 컴포넌트
export const AllWrapp = styled.section`
  ${AllWrappCss};
`;

export const MainContWrapp = styled.section`
  ${MainWrappCss};
`;
