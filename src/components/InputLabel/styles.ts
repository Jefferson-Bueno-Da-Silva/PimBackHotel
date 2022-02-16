import styled from 'styled-components/native';
import { TextInput, View } from 'react-native';
import { primary } from '../../styles/colors';

export const ContainerInput = styled(View)`
    padding: 0px 16px;
`;

export const Input = styled(TextInput)`
    height: 48px;
    padding: 12px;

    border-width: 1px;
    border-radius: 12px;
    border-color: ${primary.CadetGrey};
    margin-bottom: 16px;
`;
