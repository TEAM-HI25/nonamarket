import styled from 'styled-components';
import { AllWrappCss, MainWrappCss } from '../../../styles/Globalstyled';

export const Container = styled.section`
  ${AllWrappCss};
`;

export const MainWrap = styled.main`
  ${MainWrappCss};
  min-height: 100vh;
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
  & section {
    margin: 20px 16px;
  }
`;

export const PostAlbumWrap = styled.ul`
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

export const EmptyContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  width: 100%;
  background-color: #fff;
  p {
    font-size: 25px;
    color: #bdbdbd;
  }
  span {
    font-size: 13px;
    font-weight: 500px;
    color: #bdbdbd;
    margin-bottom: 25px;
  }
`;

export const Empty = styled.div`
  min-height: 60vh;
  width: 100%;
`;
