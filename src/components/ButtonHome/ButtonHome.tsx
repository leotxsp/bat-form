import React, {useState} from 'react';
import { Text, Pressable, View} from 'react-native';
import { styles } from './ButtonHomeStyle';


export function ButtonHome(props) {
  const { navigation } = props;


  const handleNavigateToForm = () => {
    navigation.navigate('Form');
    
  }


 return (
    <>
      <Pressable
        onPress={handleNavigateToForm}
        style={styles.button}
      >
        <Text style={styles.text}>
          Navegar para Formulário
        </Text>
      </Pressable>
    </>
    
  );

}