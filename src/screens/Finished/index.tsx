import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { ConfirmSvg } from '../../assets';
import { LargeButton } from '../../components';

import { styles } from './styles';
import { NavigationRouteStack } from '../../interfaces/Stack/PrivateRoutes.interface';

const Finished = ({ route }) => {
    const { navigate } = useNavigation<NavigationRouteStack>();
    const navigateToHome = () => {
        navigate('Home');
    };
    return (
        <View style={styles.container}>
            <ConfirmSvg />
            <Text style={styles.title}>Finalizado</Text>
            <Text style={styles.paragraph}>{route.params?.text || 'error message'}</Text>
            <View style={styles.buttonContainer}>
                <LargeButton onPress={navigateToHome} buttonText='Finalizar' />
            </View>
        </View>
    );
};

export default Finished;
