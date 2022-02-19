import React from 'react';
import {
    TouchableOpacity,
    TouchableOpacityProps,
} from 'react-native';
import styled from 'styled-components/native';
import { primary } from '../../../../styles/colors';
import { CaptionSemiBold } from '../../../../styles/fonts';

export const IconContainer: React.FC<TouchableOpacityProps> = styled(
    TouchableOpacity
)`
    flex-direction: row;
    align-items: center;
`;

export const TextButton = styled(CaptionSemiBold)`
    color: ${primary.DarkCharcoal};
    margin-top: 2px;
    margin: 0px 16px 0px 16px;
`;
