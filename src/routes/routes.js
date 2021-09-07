import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStack from "./homeStack";
import { primary } from "../styles/colors";
import { shadow } from "../styles/shadow";

const Tab = createBottomTabNavigator();

export default function Routes() {
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
      <Tab.Screen name="HomeStack" component={HomeStack} />
    </Tab.Navigator>
  );
}