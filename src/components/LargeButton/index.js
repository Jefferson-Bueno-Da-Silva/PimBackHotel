import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

const LargeButton = ({onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} onPress={onPress} activeOpacity={.8}>
        <Text style={styles.buttonText}>Selecionar Quarto</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LargeButton;