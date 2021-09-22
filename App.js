import React from "react";
import { useFonts } from "expo-font";
import {
  Poppins_700Bold,
  Poppins_400Regular,
  Poppins_600SemiBold
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import { Background } from "./src/screens";

import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes/routes";
import { AppProvider } from "./src/contexts";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <AppProvider>
      <NavigationContainer theme={{ colors: "transparent" }}>
        <Background>
          <Routes />
        </Background>
      </NavigationContainer>
    </AppProvider>
  );
}
