/* eslint-disable @next/next/no-img-element */
import { Background, Bold, Logo, Main, Regular, Text } from "./styled";

interface BannerDesktopProps {
  texts: {
    title: string;
    subtitle: string;
    slogan: string;
    call_action: string;
  };
  images: {
    logo: string;
  };
}
const BannerDesktop = ({ texts, images }: BannerDesktopProps) => {
  const { logo } = images;
  const { title, subtitle, slogan, call_action } = texts;

  return (
    <Background>
      <Main>
        <Logo>
          <img src={logo} alt={title} />
        </Logo>
        <Text>
          <Bold>{subtitle}</Bold>
          <Regular>{slogan}</Regular>
          <Bold>{call_action}</Bold>
        </Text>
      </Main>
    </Background>
  );
};
export default BannerDesktop;
