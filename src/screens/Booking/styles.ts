import { StyleSheet, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import styled from 'styled-components/native';

export const Container = styled(View)`
    flex: 1;
    justify-content: flex-end;
    padding-top: ${getStatusBarHeight()}px;
`;

export const Space = styled(View)`
    height: 8px;
`;
