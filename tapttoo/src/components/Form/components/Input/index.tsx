import { ReactNode } from "react";
import { Icon, InputContainer, StyledInput } from "./styled";

interface InputProps {
  placeholder?: string;
  type?: string;
  children?: ReactNode;
  required?: boolean;
  name: string;
  value: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {
  const {
    placeholder,
    type = "text",
    children,
    required = false,
    name,
    value,
    onChange,
  } = props;

  return (
    <InputContainer>
      <StyledInput
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
      />
      <Icon>{children}</Icon>
    </InputContainer>
  );
};
export default Input;
