import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { ConfirmSvg } from '../../assets';
import { Background, LargeButton } from '../../components';

import { NavigationRouteStack } from '../../interfaces/Stack/PrivateRoutes.interface';
import { Title } from '../../styles/fonts';
import { AbsoluteBottom } from '../../components/AbsoluteBottom';
import { ContainerFinished, Paragraph } from './styles';

const Finished = ({ route }) => {
    const { navigate } = useNavigation<NavigationRouteStack>();
    const navigateToHome = () => {
        navigate('Home');
    };
    return (
        <Background>
            <ContainerFinished>
                <ConfirmSvg />
                <Title>Finalizado</Title>
                <Paragraph>
                    {route.params?.text || 'error message'}
                </Paragraph>
                <AbsoluteBottom>
                    <LargeButton
                        onPress={navigateToHome}
                        buttonText='Finalizar'
                    />
                </AbsoluteBottom>
            </ContainerFinished>
        </Background>
    );
};

export default Finished;
