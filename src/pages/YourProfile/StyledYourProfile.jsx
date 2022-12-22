import styled from 'styled-components';

export const MainWrap = styled.main`
  width: 390px;
  margin: 0 auto;
`;
export const ProductsSection = styled.section`
  padding: 20px 0 20px 16px;
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

/* padding-bottom 부분을 9rem으로 한 이유는 하단 탭메뉴가
position:fixed로 고정되어있어서 고정될 시 안에 컨텐츠가 탭메뉴와
겹쳐보이는 현상을 방지하기 위해서 탭메뉴 높이만큼 padding-bottom
부분을 추가해주었음 */
export const PostCardWrap = styled.section`
  padding: 1.6rem 1.6rem 9rem 1.6rem;
  width: 390px;
  border: 0.5px solid #dbdbdb;
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
