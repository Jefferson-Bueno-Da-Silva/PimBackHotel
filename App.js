import React from 'react'
import { useFonts } from 'expo-font'
import {
  Poppins_700Bold,
  Poppins_400Regular,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins'
import AppLoading from 'expo-app-loading'
import { Background } from './src/screens/background'

import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes/routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Background>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Background>
  )
}
