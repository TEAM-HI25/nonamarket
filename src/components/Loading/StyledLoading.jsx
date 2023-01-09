import styled from 'styled-components';
import { MainWrappCss } from '../../styles/Globalstyled';

const LoadingWrap = styled.div`
  ${MainWrappCss};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: var(--main-text-color);

  img {
    width: 50px;
  }

  p {
    margin-top: 10px;
    font-size: 14px;
    color: #f5c045;
  }
`;

export default LoadingWrap;
