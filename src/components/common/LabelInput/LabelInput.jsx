import { Label, Input, LabelInputWrap } from './StyledLabelInput';

const LabelInput = (props) => {
  const { label, forid, type, placeholder, className } = props;

  return (
    <LabelInputWrap className={className}>
      <Label htmlFor={forid}>{label}</Label>
      <Input type={type} id={forid} placeholder={placeholder} />
    </LabelInputWrap>
  );
};

export default LabelInput;
