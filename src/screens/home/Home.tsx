import React from "react";
import {Text,View,StatusBar} from "react-native";
import styles from "./Style";
// aparentemente tem que ultilizar o mesmo nome de função na parte {} do import
import {MrKrabsLogo} from "../../components/MrKrabsLogo/MrKrabsLogo";
import { ButtonHome } from "../../components/ButtonHome/ButtonHome";

function Home({ navigation }) {
  return (
    <View style={styles.appContainer}>
            <View style={styles.logoContainer}>
            <MrKrabsLogo/>
      </View>
      <ButtonHome navigation={navigation}/>
    </View>
  );
}
export default Home;