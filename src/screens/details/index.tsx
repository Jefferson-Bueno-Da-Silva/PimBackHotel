import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

// components
import {
    Background,
    HeaderImage,
    LargeButton,
} from '../../components';

// styles
import { Container, DetailsContainer, Location } from './styles';

// utils
import { CaptionRegular, SubTitle } from '../../styles/fonts';
import { useNavigation } from '@react-navigation/native';
import { NavigationRouteStack } from '../../interfaces/Stack/PrivateRoutes.interface';
import { AbsoluteBottom } from '../../components/AbsoluteBottom';

const DEFAULT = {
    id: 1,
    roomNumber: '1',
    howManyPeople: 1,
    description: 'nenhum',
    image: 'https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/601082646d6bf4446451b0a4_6002086f72b72717ae01d954_google-doc-error-message.png',
    roomCategory: {
        id: 1,
        categoryName: 'teste',
        qtyBeds: 1,
        value: '1000.00',
    },
};

const Details = ({ route }) => {
    const navigation = useNavigation<NavigationRouteStack>();
    const [hotelData, setHotelData] = useState(DEFAULT);

    const moveToReserves = useCallback(() => {
        navigation.navigate('Reserve', hotelData);
    }, [hotelData]);

    useEffect(() => {
        if (!!route?.params) {
            setHotelData(route?.params);
        }
    }, [route]);

    return (
        <Background>
            <Container>
                <HeaderImage
                    imageUri={hotelData.image}
                    title={hotelData.description}
                />

                <DetailsContainer>
                    <Location>
                        <SubTitle>Preço:</SubTitle>
                    </Location>

                    <CaptionRegular>
                        {`R$ ${parseFloat(
                            hotelData.roomCategory.value
                        )
                            .toFixed(2)
                            .replace('.', ',')}`}
                    </CaptionRegular>
                </DetailsContainer>

                <DetailsContainer>
                    <Location>
                        <SubTitle>Ocupação</SubTitle>
                    </Location>

                    <CaptionRegular>
                        {hotelData.howManyPeople} Pessoa
                    </CaptionRegular>
                </DetailsContainer>
            </Container>

            <AbsoluteBottom>
                <LargeButton
                    onPress={moveToReserves}
                    buttonText='Selecionar Quarto'
                />
            </AbsoluteBottom>
        </Background>
    );
};

export default Details;
