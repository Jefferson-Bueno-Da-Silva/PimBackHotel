import React from 'react';
import { Text, View } from 'react-native';
import { fonts } from '../../styles/fonts';

import { styles } from './styles';

const HeaderStack = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={fonts.captionBold}>{text}</Text>
    </View>
  );
}

export default HeaderStack;