import React from 'react';
import styled from 'styled-components/native';
import {
    TextProps,
    TouchableOpacity,
    TouchableOpacityProps,
    View,
} from 'react-native';
import { primary } from '../../styles/colors';
import { CaptionBold, fonts } from '../../styles/fonts';

type PrimaryOrSecondaryProps = {
    isSecondary: boolean;
};

export const Container = styled(View)`
    flex: 1;
    align-items: center;
    justify-content: center;
    margin: 0px 16px 0px 16px;
`;

export const ButtonPrimaryOrSecondaryText: React.FC<
    PrimaryOrSecondaryProps & TextProps
> = styled(CaptionBold)`
    color: ${(props: PrimaryOrSecondaryProps) =>
        props.isSecondary ? primary.ChineseBlack : primary.White};
`;

export const ButtonPrimaryOrSecondary: React.FC<
    PrimaryOrSecondaryProps & TouchableOpacityProps
> = styled(TouchableOpacity)`
    height: 50px;
    width: 100%;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    padding: 16px 0px 16px 0px;
    background-color: ${(props: PrimaryOrSecondaryProps) =>
        props.isSecondary
            ? primary.AntiFlashWhite
            : primary.ChineseBlack};
`;
