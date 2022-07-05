import type { GetServerSideProps } from "next";
import Head from "next/head";
import {
  BannerContainer,
  Content,
  LoginContainer,
  Logo,
  LogoMobile,
} from "../../styles/pages";
import { BannerDesktop, LoginForm } from "../components";
import { BASE_URL } from "../utils/url";

interface HomeProps {
  data: {
    texts: {
      title: string;
      subtitle: string;
      slogan: string;
      call_action: string;
      section_login: {
        title: string;
        forgot: string;
        register: string;
        register_call: string;
        login_call: string;
      };
    };
    images: {
      logo: string;
      logo_mobile: string;
    };
  };
}
const Home = ({ data }: HomeProps) => {
  const { texts, images } = data;

  return (
    <>
      <Head>
        <title>Tapttoo | Login</title>
      </Head>
      <Content>
        <BannerContainer>
          <BannerDesktop texts={texts} images={images} />
        </BannerContainer>

        <LogoMobile>
          <Logo src={images.logo_mobile} />
        </LogoMobile>

        <LoginContainer>
          <LoginForm section_login={texts.section_login} />
        </LoginContainer>
      </Content>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${BASE_URL}/info/`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
