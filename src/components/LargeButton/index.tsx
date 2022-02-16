import React from 'react';
import {
    GestureResponderEvent,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { CaptionBold } from '../../styles/fonts';

import {
    ButtonPrimaryOrSecondary,
    ButtonPrimaryOrSecondaryText,
    Container,
} from './styles';

export type LargeBUttonProps = {
    onPress: (event: GestureResponderEvent) => void;
    buttonText: string;
    secondary?: boolean;
};

const LargeButton = ({
    onPress,
    buttonText = '',
    secondary,
}: LargeBUttonProps) => {
    return (
        <Container>
            <ButtonPrimaryOrSecondary
                isSecondary={secondary}
                onPress={onPress}
                activeOpacity={0.8}
            >
                <ButtonPrimaryOrSecondaryText isSecondary={secondary}>
                    {buttonText}
                </ButtonPrimaryOrSecondaryText>
            </ButtonPrimaryOrSecondary>
        </Container>
    );
};

export default LargeButton;
