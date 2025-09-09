import React from "react";
import {Text,View,StatusBar} from "react-native";
import styles from "./FinalScreenStyle";
import {MrKrabsLogo} from "../../components/MrKrabsLogo/MrKrabsLogo";

function Home() {
  return (
    <View style={styles.appContainer}>
            <View style={styles.logoContainer}>
            <MrKrabsLogo/>
      </View>
      <Text style={styles.Texto}>
        Minhas mais respeitosas congratulações: vós lograstes êxito no singular desafio que vos propus. Não era senão uma prova engenhosa, urdida para pôr à prova vossa tenacidade e o primor de vosso foco no ofício, por vezes enfadonho, de preencher formulários. Sois agora digno do louvor reservado àqueles que, mesmo nas tarefas mais triviais, demonstram grandeza de espírito.
      </Text>
    </View>
  );
}
export default Home;