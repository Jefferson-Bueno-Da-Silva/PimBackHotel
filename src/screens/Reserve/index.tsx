import React, { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import {
    Background,
    DatePicker,
    LargeButton,
    Picker,
} from '../../components';

import { useAuth, useBookings } from '../../hooks';
import { NavigationRouteStack } from '../../interfaces/Stack/PrivateRoutes.interface';
import { AbsoluteBottom } from '../../components/AbsoluteBottom';

const Reserve = ({ route }) => {
    const navigation = useNavigation<NavigationRouteStack>();
    const auth = useAuth();
    const booking = useBookings();

    const [occupation, setOccupation] = useState(
        route?.params.howManyPeople || 0
    );

    const [dateEntrada, setDateEntrada] = useState(
        new Date(Date.now())
    );
    const [dateSaida, setDateSaida] = useState(new Date(Date.now()));

    const moveToFinished = useCallback(async () => {
        const response = await booking.create({
            data_entrada: dateEntrada.toISOString(),
            data_saida: dateSaida.toISOString(),
            id_quarto: route?.params.id,
            id_user: auth.authState.user.id,
        });

        if (response) {
            navigation.navigate('Finished', {
                text: 'Quando chegar no Hotel, faça o check-in pelo celular lendo o QR code.',
            });
        }
    }, [dateEntrada, dateSaida]);

    return (
        <Background>
            <DatePicker
                dateEntrada={dateEntrada}
                setDateEntrada={setDateEntrada}
                dateSaida={dateSaida}
                setDateSaida={setDateSaida}
            />
            <Picker occupation={occupation} />
            <AbsoluteBottom>
                <LargeButton
                    onPress={moveToFinished}
                    buttonText='Confirmar'
                />
            </AbsoluteBottom>
        </Background>
    );
};

export default Reserve;
