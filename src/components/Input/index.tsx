import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

// dependencies
import { FontAwesome5 } from '@expo/vector-icons';

// styles
import { styles } from './styles';
import { primary } from '../../styles/colors';

const Input = ({value, setValue, onPress}) => {
  return (
    <View style={styles.container} >
      <TextInput style={styles.input} placeholder="Encontre aqui !" value={value} onChangeText={setValue} />
      <TouchableOpacity activeOpacity={0.5} onPress={onPress} >
        <FontAwesome5 name="search" size={20} color={primary.ChineseBlack} />
      </TouchableOpacity>
    </View>
  );
}

export default Input;