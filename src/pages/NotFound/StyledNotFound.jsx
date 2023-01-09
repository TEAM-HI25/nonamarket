import styled from 'styled-components';

export const LayOut = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

export const NotFoundMessage = styled.span`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.4rem;
  color: #767676;
`;
