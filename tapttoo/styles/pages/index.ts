import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  margin: auto;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const LoginContainer = styled.div`
  margin: auto;
  @media screen and (max-width: 767px) {
    margin-top: 4.75rem;
  }
`;

export const BannerContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const LogoMobile = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Logo = styled.img`
  width: 10rem;
  height: 5rem;
  margin-top: 2.5rem;
`;

export const SignUpFormContainer = styled.div`
  margin: auto;
  @media screen and (max-width: 767px) {
    margin-top: 4.75rem;
  }
`;
