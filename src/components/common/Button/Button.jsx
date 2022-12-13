import { StyledBtn, SIZES } from './StyledBtn';

const Button = ({ name, size, disabled }) => {
  const sizeStyle = SIZES[size];
  return (
    <StyledBtn type='button' sizeStyle={sizeStyle} disabled={disabled}>
      {name}
    </StyledBtn>
  );
};

export default Button;
