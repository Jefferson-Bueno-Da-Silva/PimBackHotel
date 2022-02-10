import styled from 'styled-components/native';
import { StyleSheet, Text } from 'react-native';

export const MediumSemiBold = styled(Text)`
    font-family: 'Poppins_600SemiBold';
    font-size: 14px;
`;

export const Title = styled(Text)`
    font-family: 'Poppins_700Bold';
    font-size: 40px;
`;

export const SubTitleLarge = styled(Text)`
    font-family: 'Poppins_600SemiBold';
    font-size: 24;
`;

export const SubTitle = styled(Text)`
    font-family: 'Poppins_600SemiBold';
    font-size: 18px;
`;

export const CaptionBold = styled(Text)`
    font-family: 'Poppins_700Bold';
    font-size: 16px;
`;

export const CaptionSemiBold = styled(Text)`
    font-family: 'Poppins_600SemiBold';
    font-size: 16px;
`;

export const CaptionRegular = styled(Text)`
    font-family: 'Poppins_400Regular';
    font-size: 16px;
`;

export const Tiny = styled(Text)`
    font-family: 'Poppins_400Regular';
    font-size: 11px;
`;

export const TinyBold = styled(Text)`
    font-family: 'Poppins_600SemiBold';
    font-size: 11px;
`;

export const fonts = StyleSheet.create({
    title: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 40,
    },
    subTitleLarge: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 24,
    },
    subTitle: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 18,
    },
    captionBold: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 16,
    },
    captionSemiBold: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 16,
    },
    captionRegular: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 16,
    },
    mediumSemiBold: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 14,
    },
    tiny: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 11,
    },
    tinyBold: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 11,
    },
});
