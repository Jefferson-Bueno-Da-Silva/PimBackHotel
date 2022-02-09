import styled from 'styled-components/native';
import { View, Text } from 'react-native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { primary } from '../../styles/colors';
import { fonts } from '../../styles/fonts';

export const Container = styled(View)`
    flex: 1;
    padding-top: ${getStatusBarHeight()}px;
    padding-left: 16px;
    padding-right: 16px;
    align-items: center;
    justify-content: center;
    background-color: ${primary.Lotion};
`;

export const ImageContainer = styled(View)`
    padding-top: 16px;
`;

export const TextContainer = styled(View)`
    flex-grow: 1;
    align-items: center;
    justify-content: center;
`;

export const Title = styled(Text)`
    text-align: center;
    ${fonts.subTitleLarge}
`;

export const SubTitle = styled(Text)`
    text-align: center;
    margin-top: 16px;
    ${fonts.captionRegular}
`;

export const ButtonsContainer = styled(View)`
    flex-grow: 1;
    width: 100%;
`;

export const TermsContainer = styled(View)`
    width: 100%;
`;

export const TermsText = styled(Text)`
    color: ${primary.ChineseBlack};
    text-align: center;
    margin-top: 16px;
    ${fonts.tiny}
`;

export const TermsTextLink = styled(Text)`
    color: ${primary.Accept};
`;
