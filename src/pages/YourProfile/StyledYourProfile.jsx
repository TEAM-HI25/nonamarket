import styled from 'styled-components';

export const ProductsSection = styled.section`
  padding: 20px 0 20px 16px;
  width: 390px;
  /* height: 208px; */
  border: 0.5px solid #dbdbdb;
  overflow: hidden;
  h2 {
    margin-bottom: 16px;
    font-size: 1.6rem;
    line-height: 2rem;
    font-weight: 700;
  }
  div {
    display: flex;
    gap: 10px;
  }
`;

export const ProfilePostCardWrap = styled.section`
  padding: 1.6rem 1.6rem 3rem 1.6rem;
  width: 390px;
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
