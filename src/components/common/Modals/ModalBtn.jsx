import styled from 'styled-components';

const PostModalBtn = styled.button`
  display: block;
  width: 100%;
  margin: 14px 0 14px;
  text-align: left;
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
