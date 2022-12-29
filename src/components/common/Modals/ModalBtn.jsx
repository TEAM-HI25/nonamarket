import styled from 'styled-components';

const PostModalBtn = styled.button`
  margin: 14px 0 14px;
  font-size: 1.4rem;
  line-height: 1.7rem;
`;

const ModalBtn = ({ name, onClick }) => {
  return (
    <PostModalBtn type='button' onClick={onClick}>
      {name}
    </PostModalBtn>
  );
};

export default ModalBtn;
