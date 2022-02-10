import React from 'react';
import { MediumSemiBold } from '../../styles/fonts';

import { Input } from './styles';

const InputLabel = ({ label, ...rest }) => {
    return (
        <>
            <MediumSemiBold>{label}</MediumSemiBold>
            <Input {...rest} />
        </>
    );
};

export default InputLabel;
