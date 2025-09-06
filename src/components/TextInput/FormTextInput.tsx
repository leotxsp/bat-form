import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './TextInputStyle';


interface FormTextInputProps{
  placeholder:string
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
        placeholder={props.placeholder}
      />
    </View>
  );
}
