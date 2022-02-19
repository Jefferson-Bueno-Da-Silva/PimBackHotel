import React from "react";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";

import { Principal } from "../screens";

export type RootStackParamList = {
  Principal: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const Auth = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={"Principal"}
    >
      <Stack.Screen name="Principal" component={Principal} />
    </Stack.Navigator>
  );
};

export default Auth;
