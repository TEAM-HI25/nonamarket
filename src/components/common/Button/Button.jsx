import { StyledBtn, SIZES } from './StyledBtn';

const Button = ({ type, name, size, disabled, className, onClick }) => {
  const sizeStyle = SIZES[size];
  return (
    <StyledBtn
      type={type}
      className={className}
      sizeStyle={sizeStyle}
      disabled={disabled}
      onClick={onClick}
    >
      {name}
    </StyledBtn>
  );
};

export default Button;
