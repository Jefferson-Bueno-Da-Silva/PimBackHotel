import React, { forwardRef, useState, useImperativeHandle } from 'react';

// components
import Avatar from '../Avatar';
import Input from '../Input';

// Styles
import { Container, Logo, Top, Bottom, Middle } from './styles';
import { CaptionBold, CaptionRegular, fonts } from '../../styles/fonts';

// Assets
import { logo } from '../../assets';
import { shadow } from '../../styles/shadow';

const Header = ({ value, setValue }) => {
    return (
        <Container style={shadow.shadow5}>
            <Top>
                <Logo source={logo} />
                <Middle>
                    <CaptionBold>Um lugar lindo para viver.</CaptionBold>
                    <CaptionRegular>Procure o lugar que você deseja passar seu tempo</CaptionRegular>
                </Middle>
            </Top>

            <Bottom>
                <Input value={value} setValue={setValue} />
            </Bottom>
        </Container>
    );
};

export default Header;
