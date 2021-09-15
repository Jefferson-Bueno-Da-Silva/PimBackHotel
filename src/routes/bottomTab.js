import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "../screens";
import { Booking } from "../screens";

import {
  TabBarOptionsBooking,
  TabBarOptionsHome
} from "../components/TabBarOptions";

import { primary } from "../styles/colors";
import { shadow } from "../styles/shadow";

const Tab = createBottomTabNavigator();

export default function bottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 64,
          borderWidth: 0,
          borderColor: "transparent",
          backgroundColor: primary.Lotion,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          ...shadow.shadow8
        }
      }}
    >
      <Tab.Screen name="HomeTab" component={Home} options={TabBarOptionsHome} />
      <Tab.Screen
        name="BookingTab"
        component={Booking}
        options={TabBarOptionsBooking}
      />
    </Tab.Navigator>
  );
}
