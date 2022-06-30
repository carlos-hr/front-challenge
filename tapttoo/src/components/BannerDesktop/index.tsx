import { api } from "../../services/api";
import { Background, Bold, Logo, Main, Regular, Text } from "./styles";

const BannerDesktop = () => {
  return (
    <Background>
      <Main>
        <Logo>Tapttoo</Logo>
        <Text>
          <Bold>O lugar certo para encontrar a sua próxima tatuagem.</Bold>
          <Regular>
            Descubra e siga seus tatuadores e estilos preferidos.
          </Regular>
          <Bold>Acesse!</Bold>
        </Text>
      </Main>
    </Background>
  );
};
export default BannerDesktop;
