import React from "react";
import {Text,View,StatusBar} from "react-native";
import styles from "./FormStyle";
import {FormTextInput} from "../../components/TextInput/FormTextInput";

export default function Form() {
  return (
    <View style={styles.appContainer}>
      <Text>Formulário</Text>
      <FormTextInput label="Senha" pass="minhaSenha" />
      <FormTextInput label="Confirmação de Senha" pass="minhaSenha" />
    </View>
  );
}
