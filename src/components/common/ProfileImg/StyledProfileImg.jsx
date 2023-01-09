import styled from 'styled-components';

const StyledProfileImg = styled.img`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
  object-fit: cover;
`;

export default StyledProfileImg;
