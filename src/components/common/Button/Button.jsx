import { StyledBtn, SIZES } from './StyledBtn';

const Button = ({ name, size, disabled, className }) => {
  const sizeStyle = SIZES[size];
  return (
    <StyledBtn
      type='button'
      className={className}
      sizeStyle={sizeStyle}
      disabled={disabled}
    >
      {name}
    </StyledBtn>
  );
};

export default Button;
