import React from 'react';
import { View } from 'react-native';
import { shadow } from '../../styles/shadow';

import { Container, Profile } from './styles';

export const sizeTypeProp = {
    small: 48,
    medium: 58,
};

/**
 * Retorna o Avatar
 * @param {'small' | 'medium'} sizeType
 * @returns
 */
const Avatar = ({ sizeType, profile }) => {
    return (
        <Container>
            <View style={{ ...shadow.shadow8, backgroundColor: 'transparent', borderRadius: 20 }}>
                <Profile
                    source={{ uri: profile }}
                    style={{ height: sizeTypeProp[sizeType], width: sizeTypeProp[sizeType] }}
                />
            </View>
        </Container>
    );
};

export default Avatar;
