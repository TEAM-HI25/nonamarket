import styled from 'styled-components';

const ProductSection = styled.section`
  width: 390px;
  height: 208px;
  padding: 20px 0 20px 16px;
  border: 0.5px solid var(--border-color);
  overflow-x: scroll;
  overflow-y: hidden;
  h2 {
    margin-bottom: 16px;
    font-size: 1.6rem;
    line-height: 2rem;
    font-weight: 700;
  }
  li {
    display: flex;
    gap: 10px;
  }
`;

export default ProductSection;
