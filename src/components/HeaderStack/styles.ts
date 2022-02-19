import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { primary } from '../../styles/colors';
import { shadow } from '../../styles/shadow';
import { View } from 'react-native';

export const Container = styled(View)`
    width: 100%;
    height: ${68 + getStatusBarHeight()}px;
    padding-top: ${getStatusBarHeight()}px;
    background-color: ${primary.Lotion};
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    align-items: center;
    justify-content: center;
`;
