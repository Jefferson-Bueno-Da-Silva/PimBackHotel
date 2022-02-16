import styled from 'styled-components/native';
import { ImageBackground, ImageBackgroundProps, StyleSheet } from 'react-native';
import { primary } from '../../styles/colors';
import { SubTitle } from '../../styles/fonts';
import React from 'react';

export const Container: React.FC<ImageBackgroundProps> = styled(ImageBackground)`
    width: 100%;
    height: 300px;
    align-items: flex-start;
    justify-content: flex-end;
`;

export const Title = styled(SubTitle)`
    color: ${primary.White};
    margin: 0px 16px 0px 16px;
`;

export const styles = StyleSheet.create({
    imageSource: {
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
});
