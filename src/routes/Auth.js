import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Principal } from "../screens";

const Stack = createNativeStackNavigator();

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
