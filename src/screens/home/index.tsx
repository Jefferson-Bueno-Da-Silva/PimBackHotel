import React, {
    useCallback,
    useEffect,
    useMemo,
    useState,
} from 'react';
import { View, FlatList } from 'react-native';
import {
    Background,
    EmptyListComponent,
    Header,
    ListView,
} from '../../components';
import { useNavigation } from '@react-navigation/core';

import { Container } from './styles';
import { useRooms } from '../../hooks';
import { RoomsResponse } from '../../services/api/rooms';
import { NavigationRouteStack } from '../../interfaces/Stack/PrivateRoutes.interface';
import { Space } from '../../components/Space';

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
                              item.description
                                  .toLowerCase()
                                  .includes(
                                      value.toString().toLowerCase()
                                  )
                      )
                : rooms.getRooms(),

        [rooms, value]
    );

    return (
        <Background>
            <Header value={value} setValue={setValue} />
            <FlatList
                data={roomsList}
                keyExtractor={(hotelData) => hotelData.id.toString()}
                ListHeaderComponent={() => <Space />}
                renderItem={({ item }) => (
                    <ListView
                        room={item}
                        onPress={() => navigateToDetails(item)}
                    />
                )}
                ListEmptyComponent={() =>
                    !!value && (
                        <EmptyListComponent title='Não encontramos nenhum quarto com esse nome :/' />
                    )
                }
            />
        </Background>
    );
};
export default Home;
