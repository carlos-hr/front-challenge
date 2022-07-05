import styled from "styled-components";

interface StyledButtonProps {
  width: string;
  height: string;
  color: string;
  background: string;
  border: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: 1.125rem;
  font-weight: 500;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  border: ${(props) => props.border};
  cursor: pointer;
`;
