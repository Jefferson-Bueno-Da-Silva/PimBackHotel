import React from 'react';
import { useFonts } from 'expo-font';
import { Poppins_700Bold, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { Background } from './src/screens';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/routes';
import { AuthProvider } from './src/contexts/Auth.Context';
import { RoomsProvider } from './src/contexts/Rooms.Context';
import { BookingProvider } from './src/contexts/Booking.Context';

export default function App() {
    const [fontsLoaded] = useFonts({
        Poppins_700Bold,
        Poppins_400Regular,
        Poppins_600SemiBold,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <AuthProvider>
            <RoomsProvider>
                <BookingProvider>
                    <NavigationContainer>
                        <Background>
                            <Routes />
                        </Background>
                    </NavigationContainer>
                </BookingProvider>
            </RoomsProvider>
        </AuthProvider>
    );
}
