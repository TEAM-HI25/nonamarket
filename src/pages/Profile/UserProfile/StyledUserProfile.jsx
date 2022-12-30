import styled from 'styled-components';
import { AllWrappCss, MainWrappCss } from '../../../styles/Globalstyled';

export const Container = styled.section`
  ${AllWrappCss};
`;

export const MainWrap = styled.main`
  ${MainWrappCss};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  overflow: hidden;
  background-color: transparent;
`;

export const PostCardWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
  background-color: #fff;
  & section + section {
    margin-top: 20px;
  }
`;

export const ProfilePostAlbumWrap = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
  li {
  }
`;
