import { StyleSheet, Text, View } from 'react-native';
import { primary } from '../../styles/colors';

import styled from 'styled-components/native';
import { fonts } from '../../styles/fonts';
import React from 'react';

export const Container = styled(View)`
    height: 25px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px 16px 0px 16px;
`;

type SwitchButtonTextProps = {
    active: boolean;
};

export const SwitchButtonText: React.FC<SwitchButtonTextProps> = styled(Text)`
    color: ${(props) => (props.active ? primary.ChineseBlack : primary.ChineseBlackTransparent)};
    ${fonts.captionSemiBold}
`;

export const styles = StyleSheet.create({
    active: {
        color: primary.ChineseBlack,
    },
    deactivate: {
        color: primary.ChineseBlackTransparent,
    },
});
