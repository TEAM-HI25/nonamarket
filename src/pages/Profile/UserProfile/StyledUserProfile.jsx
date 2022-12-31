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
  overflow: hidden;
  background-color: transparent;
`;

export const PostCardWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #bdbdbd;
  & section {
    margin: 20px 16px;
  }
`;

export const ProfilePostAlbumWrap = styled.ul`
  max-width: 390px;
  padding: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
  background-color: #fff;
  li {
    width: 114px;
    height: 114px;
    img {
      width: 114px;
      height: 114px;
    }
  }
`;
