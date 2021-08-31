import React from 'react';
import { Text, View } from 'react-native';
import { fonts } from '../../styles/fonts';

import { styles } from './styles';

const HeaderStack = () => {
  return (
    <View style={styles.container}>
      <Text style={fonts.captionBold}>Reservar</Text>
    </View>
  );
}

export default HeaderStack;