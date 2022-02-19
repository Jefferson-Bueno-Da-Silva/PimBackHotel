import React from 'react';
import {
    ActivityIndicator,
    GestureResponderEvent,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { primary } from '../../styles/colors';

import {
    ButtonPrimaryOrSecondary,
    ButtonPrimaryOrSecondaryText,
    Container,
} from './styles';

export type LargeBUttonProps = {
    onPress: (event: GestureResponderEvent) => void;
    buttonText: string;
    secondary?: boolean;
    loading?: boolean;
};

const LargeButton = ({
    onPress,
    buttonText = '',
    secondary,
    loading,
}: LargeBUttonProps) => {
    return (
        <Container>
            <ButtonPrimaryOrSecondary
                isSecondary={secondary}
                onPress={onPress}
                activeOpacity={0.8}
            >
                {loading ? (
                    <ActivityIndicator color={primary.White} />
                ) : (
                    <ButtonPrimaryOrSecondaryText
                        isSecondary={secondary}
                    >
                        {buttonText}
                    </ButtonPrimaryOrSecondaryText>
                )}
            </ButtonPrimaryOrSecondary>
        </Container>
    );
};

export default LargeButton;
