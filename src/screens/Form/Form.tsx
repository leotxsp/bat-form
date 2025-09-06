import React from "react";
import { Text , View} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./FormStyle";
import { FormTextInput } from "../../components/TextInput/FormTextInput";
import { ButtonHome } from "../../components/ButtonHome/ButtonHome";

export default function Form() {
  return (
  <KeyboardAwareScrollView
    style={styles.FormContainer}
    contentContainerStyle={styles.content}
    enableOnAndroid={true}
    extraScrollHeight={260}
    keyboardShouldPersistTaps="handled"
  >
    <Text style={styles.header}>
      Para acessar esse app resolva o pequeno desafio paywall a seguir:
    </Text>

    <View style={styles.dados}>
      <FormTextInput label="Nome" pass="Seu nome" />
      <FormTextInput label="Sobrenome" pass="Seu sobrenome" />
      <FormTextInput label="Email" pass="Seu email" />
      <FormTextInput label="Número do cartão" pass="" />
      <FormTextInput label="Validade" pass="" />
      <FormTextInput label="CVV" pass="" />
      <ButtonHome title="Enviar" onPress={() => {}} />
    </View>
  </KeyboardAwareScrollView>

  );
}
