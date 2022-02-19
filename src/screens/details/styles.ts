import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components';
import { primary } from '../../styles/colors';

export const Container = styled(ScrollView)`
    flex: 1;
`;

export const DetailsContainer = styled(View)`
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 16px;
    border-bottom-color: ${primary.ChineseBlack};
    border-bottom-width: 1px;
`;

export const Location = styled(View)`
    width: 50%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
