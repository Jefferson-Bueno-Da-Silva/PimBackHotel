import React from 'react';
import styled from 'styled-components/native';
import { Text, TextProps, View } from 'react-native';

import { primary } from '../../styles/colors';
import { CaptionSemiBold } from '../../styles/fonts';

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

export const SwitchButtonText: React.FC<
    SwitchButtonTextProps & TextProps
> = styled(CaptionSemiBold)`
    color: ${(props) =>
        props.active
            ? primary.ChineseBlack
            : primary.ChineseBlackTransparent};
`;
