import { TextInput, TextInputProps } from 'react-native';
import { primary } from '../../styles/colors';

import styled from 'styled-components/native';
import React from 'react';

export const Container = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-color: ${primary.borderColor};
    border-width: 1px;
    border-radius: 12px;
    padding: 0px 16px;
    margin: 16px;
    background-color: ${primary.White};
`;

export const InputSearch: React.FC<TextInputProps> = styled(
    TextInput
)`
    color: ${primary.ChineseBlack};
    width: 92%;
`;
