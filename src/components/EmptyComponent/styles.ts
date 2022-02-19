import { View } from 'react-native';
import styled from 'styled-components';
import { SubTitle } from '../../styles/fonts';

export const EmptyListContainer = styled(View)`
    flex: 1;
    align-items: center;
    justify-content: space-around;
`;

export const EmptyListText = styled(SubTitle)`
    padding: 0px 16px;
    text-align: center;
`;
