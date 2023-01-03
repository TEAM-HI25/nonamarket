import styled from 'styled-components';

const ProductSection = styled.section`
  width: 390px;
  padding: 20px 0 20px 16px;
  background-color: #fff;
  margin: 6px 0;
  h2 {
    margin-bottom: 16px;
    font-size: 1.6rem;
    line-height: 2rem;
    font-weight: 700;
  }
  ul {
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    gap: 10px;

    li {
      margin-bottom: 10px;
      display: flex;
      gap: 10px;
    }
  }
  ul::-webkit-scrollbar {
    width: 10px;
  }
  ul::-webkit-scrollbar-thumb {
    background: #e9e7e0;
    border-radius: 15px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
`;

export default ProductSection;
