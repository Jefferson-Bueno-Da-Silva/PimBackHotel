import { StyleSheet, Text, TextInput } from 'react-native';
import { primary } from '../../styles/colors';

import styled from 'styled-components/native';
import { MediumSemiBold } from '../../styles/fonts';

export const Input = styled(TextInput)`
    height: 48px;
    padding: 12px;

    border-width: 1px;
    border-radius: 12px;
    border-color: ${primary.CadetGrey};
    margin-bottom: 16px;
`;
