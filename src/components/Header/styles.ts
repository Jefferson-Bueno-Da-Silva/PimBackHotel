import { Image, ImageProps, View } from 'react-native';
import { primary } from '../../styles/colors';
import { shadow } from '../../styles/shadow';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import styled from 'styled-components/native';
import React from 'react';

export const Container = styled(View)`
    width: 100%;
    height: 190px;

    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;

    background-color: ${primary.Lotion};
    padding-top: ${getStatusBarHeight() + 8}px;
`;

export const Logo: React.FC<ImageProps> = styled(Image).attrs({
    resizeMode: 'center',
})`
    width: 100px;
    height: 75px;
`;

export const Top = styled(View)`
    flex-direction: row;
`;

export const Middle = styled(View)`
    flex: 1;
`;

export const Bottom = styled(View)`
    flex: 1;
`;
