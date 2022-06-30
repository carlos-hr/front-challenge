import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import { LogoDesktop } from "../components";
import { api } from "../services/api";
import { H1 } from "./styled";

const Home: NextPage = () => {
  return (
    <div>
      <LogoDesktop />
    </div>
  );
};

export default Home;
