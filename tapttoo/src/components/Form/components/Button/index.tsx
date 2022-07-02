import { ReactNode } from "react";
import { StyledButton } from "./styled";

interface ButtonProps {
  width?: string;
  height?: string;
  color?: string;
  background: string;
  border: string;
  children: ReactNode;
  submit?: boolean;
}

const Button = (props: ButtonProps) => {
  const {
    background,
    border,
    color = "black",
    height = "2.5rem",
    width = "10rem",
    children,
    submit = false,
  } = props;

  return (
    <StyledButton
      width={width}
      height={height}
      background={background}
      border={border}
      color={color}
      type={submit ? "submit" : "button"}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
