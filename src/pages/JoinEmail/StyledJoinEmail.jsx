import styled from 'styled-components';
import Button from '../../components/common/Button/Button';

export const JoinEmailWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const JoinEmailTitle = styled.h1`
  margin: 30px 0 40px;
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 3rem;
`;

export const JoinEmailBtn = styled(Button)`
  margin-top: 30px;
`;
