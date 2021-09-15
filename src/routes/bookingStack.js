import * as React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Booking, CodeScanner } from "../screens";
import { HeaderStack } from "../components";

const Stack = createNativeStackNavigator();

function BookingStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={"Booking"}
    >
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => <HeaderStack text="Reservas" />,
        }}
        name="Booking"
        component={Booking}
      />
      <Stack.Screen
        name="CodeScanner"
        component={CodeScanner}
      />
    </Stack.Navigator>
  );
}

export default BookingStack;
