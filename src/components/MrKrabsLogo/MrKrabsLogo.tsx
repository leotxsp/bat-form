import React from 'react';
import { View ,Image} from 'react-native';
import { styles } from './MrKrabsLogoStyle';
import mrkrabslogo from '../../../assets/mrkrabs.png';

export function MrKrabsLogo() {
  return (
    <View>
      <Image
        source={mrkrabslogo}
        style={styles.image}
      />
    </View>
  );
}