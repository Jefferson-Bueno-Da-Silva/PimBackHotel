import React from 'react';
import { CaptionBold, fonts } from '../../styles/fonts';
import { shadow } from '../../styles/shadow';
import { Container } from './styles';

const HeaderStack = ({ text }) => {
    return (
        <Container style={shadow.shadow8}>
            <CaptionBold>{text}</CaptionBold>
        </Container>
    );
};

export default HeaderStack;
