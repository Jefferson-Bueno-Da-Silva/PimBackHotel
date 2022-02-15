import { Image, StyleSheet, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { primary } from '../../styles/colors';
import { CaptionBold, fonts, Tiny, TinyBold } from '../../styles/fonts';

import styled from 'styled-components/native';
import React from 'react';

export const Container = styled(View)`
    flex-direction: row;
    z-index: 1000;
    border-radius: 10px;
    background-color: ${primary.White};
    margin: 8px 16px 8px 16px;
    padding: 12px 16px 12px 16px;
    align-items: center;
    justify-content: space-between;
`;

export const Template = styled(Image)`
    width: 60px;
    height: 60px;
    border-radius: 8px;
`;

export const FooterContainer = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    background-color: transparent;
`;

export const Title = styled(CaptionBold)`
    color: ${primary.ChineseBlack};
    background-color: transparent;
`;

export const LocationContainer = styled(View)`
    flex-direction: row;
    width: 50%;
    background-color: transparent;
`;
export const Location = styled(Tiny)`
    color: ${primary.DarkCharcoal};
    background-color: transparent;
`;

export const Button: React.FC<TouchableOpacityProps> = styled(TouchableOpacity)`
    background-color: ${primary.ChineseBlack};
    width: 84px;
    height: 34px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
`;

export const ButtonText = styled(TinyBold)`
    color: ${primary.Lotion};
`;
