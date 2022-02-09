import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Details, Reserve, Finished, CodeScanner } from '../screens';
import { HeaderStack } from '../components';
import bottomTab from './bottomTab.routes';

const Stack = createNativeStackNavigator();

const PrivateRoutes = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'Home'}>
            <Stack.Screen name='Home' component={bottomTab} />
            <Stack.Screen name='Details' component={Details} />
            <Stack.Screen
                options={{
                    headerShown: true,
                    header: () => <HeaderStack text='Reservar' />,
                }}
                name='Reserve'
                component={Reserve}
            />
            <Stack.Screen
                options={{
                    headerShown: true,
                    header: () => <HeaderStack text='Finalizado' />,
                }}
                name='Finished'
                component={Finished}
            />
            <Stack.Screen name='CodeScanner' component={CodeScanner} />
        </Stack.Navigator>
    );
};

export default PrivateRoutes;
