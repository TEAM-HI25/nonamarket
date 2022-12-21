import styled from 'styled-components';

// 시멘틱태그를 최대한 활용하려다보니 이게 맞는지 모르겄네 아니면 <Header> 태그 사용이 맞을지..?
const NavWrapp = styled.nav`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px 8px 12px;
  background-color: #fff;
  border-bottom: 0.5px solid #dbdbdb;
`;

// 임시 컴포넌트: 속성, 컴포넌트 네임 수정필요
const Text = styled.span`
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
`;

// button -> Link 기능으로 수정하는게 맞나?
const BtnWrapp = styled.button`
  /* padding-left: 삭제예정*/
`;

// input styled
const StyledInput = styled.input`
  width: 316px;
  height: 32px;
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
  NavWrapp,
  BtnWrapp,
  BackIcon,
  MoreIcon,
  SearchIcon,
  StyledInput,
  Text,
};
