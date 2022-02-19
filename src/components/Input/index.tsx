import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

// dependencies
import { FontAwesome5 } from '@expo/vector-icons';

// styles
import { Container, InputSearch } from './styles';
import { primary } from '../../styles/colors';
import { shadow } from '../../styles/shadow';

const Input = ({ value, setValue }) => {
    return (
        <Container style={shadow.shadow5}>
            <InputSearch placeholder='Encontre aqui !' value={value} onChangeText={setValue} />
            <FontAwesome5 name='search' size={20} color={primary.ChineseBlack} />
        </Container>
    );
};

export default Input;
