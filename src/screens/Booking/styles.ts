import { View } from 'react-native';
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled(View)`
    flex: 1;
    padding-top: ${getStatusBarHeight()}px;
`;
