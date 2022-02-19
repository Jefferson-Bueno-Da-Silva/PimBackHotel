import React from 'react';
import styled from 'styled-components/native';
import { View, ViewProps } from 'react-native';
import { primary } from '../../styles/colors';

const Line: React.FC<ViewProps> = styled(View)`
    height: 1px;
    width: 100%;
    background-color: ${primary.CadetGrey};
`;

export default Line;
