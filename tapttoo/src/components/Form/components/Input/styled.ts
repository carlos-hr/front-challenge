import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  margin-top: 0.5rem;

  @media screen and (max-width: 359px) {
    width: 19rem;
    margin: 1rem auto;
  }
`;

export const StyledInput = styled.input`
  width: 20rem;
  height: 1.8125rem;
  border: none;
  outline: none;
  border-bottom: 2px solid #2d3748;

  @media screen and (max-width: 359px) {
    width: 19rem;
  }
`;

export const Icon = styled.div`
  display: inline-block;
  position: absolute;
  right: 0.5rem;
  bottom: 0;

  @media screen and (max-width: 359px) {
    right: 1rem;
  }
`;
