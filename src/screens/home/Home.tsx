import React from "react";
import { View } from "react-native";
import styles from "./Style";
import { MrKrabsLogo } from "../../components/MrKrabsLogo/MrKrabsLogo";
import { ButtonHome } from "../../components/ButtonHome/ButtonHome";
import StarBackground from "../../components/UI/StarBackground";

function Home({ navigation }) {
  return (
    <View style={styles.appContainer}>
      <StarBackground />
      <View style={styles.logoContainer}>
        <MrKrabsLogo />
      </View>
      <ButtonHome navigation={navigation} />
    </View>
  );
}

export default Home;
