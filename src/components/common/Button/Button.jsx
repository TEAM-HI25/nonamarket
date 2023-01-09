import { StyledBtn, SIZES, COLOR } from './StyledBtn';

const Button = ({
  type,
  name,
  size,
  disabled,
  className,
  onClick,
  btncolor,
}) => {
  const sizeStyle = SIZES[size];
  const btnColor = COLOR[btncolor];
  return (
    <StyledBtn
      type={type}
      className={className}
      sizeStyle={sizeStyle}
      disabled={disabled}
      onClick={onClick}
      btncolor={btnColor}
    >
      {name}
    </StyledBtn>
  );
};

export default Button;
