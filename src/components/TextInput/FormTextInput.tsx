import React from 'react';
import {TextInput } from 'react-native';
import { styles } from './TextInputStyle';


interface FormTextInputProps{
  pass:string
}

export function FormTextInput(props : FormTextInputProps) {
  return (
      <TextInput
        style={styles.inputer}
        value={props.pass}
      />
  );
}