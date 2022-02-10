import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { View, FlatList } from 'react-native';
import { Header, ListView } from '../../components';
import { useNavigation } from '@react-navigation/core';

import { styles } from './styles';
import { useRooms } from '../../contexts/hooks/Rooms.hook';
import { RoomsResponse } from '../../services/api/rooms';
import { NavigationRouteStack } from '../../interfaces/Stack/PrivateRoutes.interface';

const Home: React.FC = () => {
    const navigation = useNavigation<NavigationRouteStack>();
    const rooms = useRooms();

    const [value, setValue] = useState<string>('');

    useEffect(() => {
        (async () => {
            await rooms.getAll();
        })();
    }, []);

    const navigateToDetails = (item: RoomsResponse) => {
        navigation.navigate('Details', item);
    };

    const roomsList = useMemo(
        () =>
            !!value
                ? rooms
                      .getRooms()
                      .filter(
                          (item) =>
                              item.description &&
                              item.description.toLowerCase().includes(value.toString().toLowerCase()),
                      )
                : rooms.getRooms(),

        [rooms, value],
    );

    return (
        <View style={styles.container}>
            <Header value={value} setValue={setValue} />
            <FlatList
                data={roomsList}
                keyExtractor={(hotelData) => hotelData.id.toString()}
                ListHeaderComponent={() => <View style={styles.space} />}
                renderItem={({ item }) => <ListView room={item} onPress={() => navigateToDetails(item)} />}
                style={styles.flatList}
            />
        </View>
    );
};
export default Home;
