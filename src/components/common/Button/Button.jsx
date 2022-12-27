import { StyledBtn, SIZES } from './StyledBtn';

const Button = ({ name, size, disabled, className, onClick }) => {
  const sizeStyle = SIZES[size];
  return (
    <StyledBtn
      type='submit' // 수정
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
