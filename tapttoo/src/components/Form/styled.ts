import styled from "styled-components";
import { gray_800 } from "../../utils/colors";

export const Main = styled.main`
  @media screen and (max-width: 359px) {
    width: 19rem;
    margin: 0 auto;
  }
`;

export const Form = styled.form`
  height: 22.75rem;
  width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media screen and (max-width: 767px) {
    height: 30rem;
  }
`;

export const Title = styled.h1`
  height: 2.68rem;
  font-size: 2.25rem;
  font-weight: 300;
  color: ${gray_800};

  @media screen and (max-width: 767px) {
    text-align: center;
  }
`;

export const FormButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2.5rem;

  @media screen and (max-width: 359px) {
    width: 19rem;
    margin: 3.15rem auto;
  }
`;

export const Anchor = styled.a`
  font-size: 0.875rem;
  line-height: 1.06rem;
  cursor: pointer;
  text-decoration: underline;
`;

export const SignUpButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 5rem;
`;

export const LoginButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 20rem;
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const LinkText = styled.p`
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

export const ValidationMessage = styled.span`
  color: red;
  font-weight: 400;
  font-size: 0.75rem;
`;
