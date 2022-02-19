import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Background, ListView } from '../../components';

import { Container } from './styles';
import { useBookings } from '../../hooks';
import { NavigationRouteStack } from '../../interfaces/Stack/PrivateRoutes.interface';
import { Space } from '../../components/Space';

const Booking = () => {
    const booking = useBookings();
    const navigation = useNavigation<NavigationRouteStack>();

    const moveToCodeScanner = (id) => {
        booking.setIdSelected(id);
        navigation.navigate('CodeScanner');
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener(
            'focus',
            async () => {
                await booking.getAll({ checkin: false });
            }
        );
        return unsubscribe;
    }, [navigation]);

    return (
        <Container>
            <Background>
                <FlatList
                    data={booking.getRooms}
                    keyExtractor={(hotelData) =>
                        hotelData.id_reserva.toString()
                    }
                    ListHeaderComponent={() => <Space />}
                    renderItem={({ item }) => (
                        <ListView
                            room={item.room}
                            booking={item}
                            onPress={() =>
                                moveToCodeScanner(item.id_reserva)
                            }
                        />
                    )}
                />
            </Background>
        </Container>
    );
};

export default Booking;
