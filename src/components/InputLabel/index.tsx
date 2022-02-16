import React from 'react';
import { MediumSemiBold } from '../../styles/fonts';

import { ContainerInput, Input } from './styles';

const InputLabel = ({ label, ...rest }) => {
    return (
        <ContainerInput>
            <MediumSemiBold>{label}</MediumSemiBold>
            <Input {...rest} />
        </ContainerInput>
    );
};

export default InputLabel;
