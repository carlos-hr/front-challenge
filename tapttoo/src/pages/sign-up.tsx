import type { GetServerSideProps } from "next";
import Head from "next/head";
import {
  BannerContainer,
  Content,
  SignUpFormContainer,
  Logo,
  LogoMobile,
} from "../../styles/pages";
import { BannerDesktop, SignUpForm } from "../components";
import { BASE_URL } from "../utils/url";

interface CreateAccountProps {
  data: {
    texts: {
      title: string;
      subtitle: string;
      slogan: string;
      call_action: string;
    };
    images: {
      logo: string;
      logo_mobile: string;
    };
  };
}

const CreateAccount = ({ data }: CreateAccountProps) => {
  const { texts, images } = data;

  return (
    <>
      <Head>
        <title>Tapttoo | SignUp</title>
      </Head>
      <Content>
        <BannerContainer>
          <BannerDesktop texts={texts} images={images} />
        </BannerContainer>

        <LogoMobile>
          <Logo src={images.logo_mobile} />
        </LogoMobile>

        <SignUpFormContainer>
          <SignUpForm />
        </SignUpFormContainer>
      </Content>
    </>
  );
};

export default CreateAccount;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${BASE_URL}/info/`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
