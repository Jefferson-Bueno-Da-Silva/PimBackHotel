import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { SingUpRoutes } from '../../interfaces';
import { fonts } from '../../styles/fonts/';

import { Container, SwitchButtonText } from './styles';

export type TabNavigationModalProps = {
    active: SingUpRoutes;
    setActive: React.Dispatch<React.SetStateAction<SingUpRoutes>>;
};

const TabNavigationModal: React.FC<TabNavigationModalProps> = ({
    active,
    setActive,
}) => {
    return (
        <Container>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setActive(SingUpRoutes.register)}
            >
                <SwitchButtonText active={!!active}>
                    Criar Conta
                </SwitchButtonText>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setActive(SingUpRoutes.login)}
            >
                <SwitchButtonText active={!active}>
                    Entrar
                </SwitchButtonText>
            </TouchableOpacity>
        </Container>
    );
};

export default TabNavigationModal;
