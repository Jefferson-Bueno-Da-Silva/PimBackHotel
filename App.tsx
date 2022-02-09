import React from 'react';
import { useFonts } from 'expo-font';
import { Poppins_700Bold, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { Background } from './src/screens';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/routes';
import { AppProvider } from './src/contexts';
import { AuthProvider } from './src/contexts/Auth.Context';

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
        <AppProvider>
            <AuthProvider>
                <NavigationContainer>
                    <Background>
                        <Routes />
                    </Background>
                </NavigationContainer>
            </AuthProvider>
        </AppProvider>
    );
}
