import React from 'react';
import styled from 'styled-components/native';
import {
    TouchableOpacity,
    TouchableOpacityProps,
    View,
} from 'react-native';
import { primary } from '../../styles/colors';
import { CaptionSemiBold } from '../../styles/fonts';

export const Container = styled(View)`
    height: 100px;
    margin: 16px 16px 0px 16px;
    background-color: ${primary.Lotion};
    border-radius: 5px;
`;

export const Button: React.FC<TouchableOpacityProps> = styled(
    TouchableOpacity
)`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 16px 0px 16px;
`;

export const TextButton = styled(CaptionSemiBold)`
    color: ${primary.DarkCharcoal};
    padding: 0px 16px 0px 16px;
`;
