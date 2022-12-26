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

export const ProductsSection = styled.section`
  padding: 20px 0 20px 16px;
  width: 390px;
  background-color: #fff;
  h2 {
    margin-bottom: 16px;
    font-size: 1.6rem;
    line-height: 2rem;
    font-weight: 700;
  }
  div {
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    gap: 10px;
  }
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
  img {
    width: 114px;
    height: 114px;
  }
`;
