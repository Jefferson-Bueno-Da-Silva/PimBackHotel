import React from 'react';
import { View } from 'react-native';
import { shadow } from '../../styles/shadow';
import Line from '../Line';
import DateButton from './components/Date';

import { Container } from './styles';

const DatePicker = ({ dateEntrada, setDateEntrada, dateSaida, setDateSaida }) => {
    return (
        <Container style={shadow.shadow5}>
            <DateButton date={dateEntrada} setDate={setDateEntrada} />
            <Line />
            <DateButton date={dateSaida} setDate={setDateSaida} />
        </Container>
    );
};

export default DatePicker;
