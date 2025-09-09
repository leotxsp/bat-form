import React, {useState} from 'react';
import { Text, Pressable, View} from 'react-native';
import { styles } from './SubmitButtonStyle';


export function Submit_Button(props) {
  const { navigation } = props;


  const handleNavigateToForm = () => {
    navigation.navigate('Final');
    
  }


 return (
    <>
      <Pressable
        onPress={handleNavigateToForm}
        style={styles.button}
      >
        <Text style={styles.text}>
          Enviar
        </Text>
      </Pressable>
    </>
    
  );

}