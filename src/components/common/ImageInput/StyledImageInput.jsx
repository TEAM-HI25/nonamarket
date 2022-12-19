import styled from 'styled-components';

const ImageInputWrap = styled.div`
  position: relative;
  width: 110px;
  margin: 0 auto 30px;

  & > img {
    width: 100%;
  }

  label > img {
    position: absolute;
    top: 74px;
    left: 74px;
    width: 36px;
    cursor: pointer;
  }
`;

export default ImageInputWrap;
