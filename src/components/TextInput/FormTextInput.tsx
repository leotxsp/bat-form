import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './TextInputStyle';


interface FormTextInputProps{
  pass:string
  label:string
}



export function FormTextInput(props : FormTextInputProps) {
  return (
    <View style ={styles.container}>
      <Text style={styles.label}>
        {props.label}
        </Text>

      <TextInput
        style={styles.inputer}
        value={props.pass}
      />
    </View>
  );
}
