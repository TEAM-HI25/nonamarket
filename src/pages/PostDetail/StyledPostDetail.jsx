import styled from 'styled-components';
import { AllWrappCss, MainWrappCss } from '../../styles/Globalstyled';

export const AllWrapper = styled.div`
  ${AllWrappCss}
`;

export const MainWrapper = styled.div`
  ${MainWrappCss}
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const PostCardWrapper = styled.div`
  padding: 20px 16px;
`;

export const CommentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 16px;
  border-top: 0.5px solid #dbdbdb;
`;
