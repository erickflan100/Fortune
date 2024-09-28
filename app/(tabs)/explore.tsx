import { StyleSheet } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#fff", dark: "#151718" }}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Fortune</ThemedText>
      </ThemedView>
      <ThemedText>
        O aplicativo Fortune inclui um exemplo de investimento dos últimos dois
        anos, onde seria possível comprar e manter as ações até a data atual ou
        investir seguindo os sinais do RSI.
      </ThemedText>
      <Collapsible title="O que é RSI?">
        <ThemedText>
          RSI é a sigla para Relative Strength Index, ou Índice de Força
          Relativa em português. O RSI é um indicador técnico utilizado na
          análise de mercados financeiros para medir a velocidade e a variação
          dos movimentos de preço. Ele oscila entre 0 e 100 e é geralmente
          utilizado para identificar condições de sobrecompra ou sobrevenda em
          um ativo. Valores acima de 70 indicam que o ativo pode estar
          sobrecomprado, enquanto valores abaixo de 30 sugerem que ele pode
          estar sobrevendido. O RSI ajuda os investidores a tomar decisões
          informadas sobre compra e venda de ativos.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Como foi usado o RSI para os Ativos?">
        <ThemedText>
          Foi utilizado um período de 22 dias úteis. Quando o RSI indicou
          sobrevenda, uma compra foi realizada. A saída do ativo ocorreu quando
          o RSI atingiu 40 pontos ou, por segurança, após 10 dias de permanência
          no ativo.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Quais serão as próximas novidades do Fortune?">
        <ThemedText>
          Novos ativos e funcionalidades serão lançados, com atualizações
          semanais. Entre as novas funcionalidades, estarão a escolha do
          período, sinais de compra e venda utilizando o RSI, e muito mais.
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
