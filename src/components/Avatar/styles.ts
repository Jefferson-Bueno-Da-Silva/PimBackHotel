import { Image, View } from 'react-native';
import { primary } from '../../styles/colors';
import styled from 'styled-components/native';

export const Container = styled(View)`
    flex: 1;
    align-items: flex-end;
    justify-content: center;
`;

export const Profile = styled(Image)`
    border-radius: 50;
    border-color: ${primary.ChineseBlack};
    border-width: 1;
`;
