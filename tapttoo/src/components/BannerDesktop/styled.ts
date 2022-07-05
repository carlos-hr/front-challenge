import styled from "styled-components";

export const Background = styled.div`
  position: relative;
  background: linear-gradient(rgba(26, 32, 44, 0.9), rgba(26, 32, 44, 0.9)),
    url("background.svg");
  height: 100vh;
  width: 50vw;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.div`
  height: 22.75rem;
  width: 20rem;
  color: white;
`;

export const Logo = styled.div`
  width: 20rem;
  height: 10rem;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 12.75rem;
  font-size: 1.5rem;
  line-height: 1.8rem;
`;

export const Bold = styled.p`
  font-weight: 400;
`;

export const Regular = styled.p`
  font-weight: 300;
`;
