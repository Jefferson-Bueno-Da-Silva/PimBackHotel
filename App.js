import React from 'react'
import { StatusBar, Text, View } from 'react-native'
import { useFonts } from 'expo-font'
import {
  Poppins_700Bold,
  Poppins_400Regular,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins'
import AppLoading from 'expo-app-loading'
import { fonts } from './src/styles/fonts'
import { Background } from './src/screens/background'
import Home from './src/screens/home'

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
      <Home/>
    </Background>
  )
}
