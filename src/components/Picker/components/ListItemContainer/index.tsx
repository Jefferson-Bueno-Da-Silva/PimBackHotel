import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { IconContainer, TextButton } from './styles';
import {
    GestureResponderEvent,
    TouchableOpacityProps,
    TouchableWithoutFeedbackProps,
} from 'react-native';

export type ListItemContainer = {
    occupation: number;
    onPress(event: number): void;
};

const ListItemContainer = ({
    occupation,
    onPress,
}: ListItemContainer) => {
    let itemList = [];
    for (let i = 1; i <= occupation; i++) {
        itemList.push(
            <IconContainer
                activeOpacity={0.7}
                onPress={() => onPress(i)}
                key={i}
            >
                <Ionicons name='people' size={16} color='black' />
                <TextButton>
                    {i} {i === 1 ? 'Pessoa' : 'Pessoas'}
                </TextButton>
            </IconContainer>
        );
    }
    return itemList;
};

export default ListItemContainer;
