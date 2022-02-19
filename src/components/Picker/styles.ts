import styled from 'styled-components/native';
import {
    ScrollView,
    TouchableOpacity,
    TouchableOpacityProps,
    View,
} from 'react-native';
import { primary } from '../../styles/colors';

export const Container = styled(View)`
    margin: 16px 16px 0px 16px;
    background-color: ${primary.Lotion};
    justify-content: center;
    border-radius: 5px;
`;

export const PickerButton: React.FC<TouchableOpacityProps> = styled(
    TouchableOpacity
)`
    height: 50px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px 16px 0px 16px;
`;

export const PickerDropDownContainer = styled(ScrollView)`
    max-height: 200px;
    padding: 0px 16px 0px 16px;
`;
