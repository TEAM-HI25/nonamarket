import styled from 'styled-components';

// 시멘틱태그를 최대한 활용하려다보니 이게 맞는지 모르겄네 아니면 <Header> 태그 사용이 맞을지..?
const HeaderWrapp = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  width: 100%;
  height: 48px;
  padding: 8px 16px;
  justify-content: space-between;
  align-items: center;
  background-color: var(--main-text-color);
  border-bottom: 0.5px solid var(--border-color);
  z-index: 10;
`;

const HeaderTitle = styled.span`
  flex-grow: 2;
  font-size: 1.8rem;
  font-weight: 500;
  margin-left: 10px;
`;

// input styled
const StyledInput = styled.input`
  width: 100%;
  height: 32px;
  margin-left: 20px;
  background-color: #f2f2f2;
  border-radius: 32px;
  border-style: none;
  padding-left: 19px;
`;

// img
const BackIcon = styled.img`
  width: 22px;
  height: 22px;
`;
const MoreIcon = styled.img`
  width: 24px;
  height: 24px;
`;
const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export {
  HeaderWrapp,
  BackIcon,
  MoreIcon,
  SearchIcon,
  StyledInput,
  HeaderTitle,
};
