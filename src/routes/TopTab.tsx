import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Login } from "../screens";
import { fonts } from "../styles/fonts";
import { primary } from "../styles/colors";

const Tab = createMaterialTopTabNavigator();

/**
 *
 * @param {"Register" | "Login"} props
 * @returns
 */
export default function TopTab({ initialRoute }) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { ...fonts.captionSemiBold, textTransform: "none" },
        tabBarActiveTintColor: primary.ChineseBlack,
        tabBarInactiveTintColor: primary.ChineseBlackTransparent,
        tabBarPressOpacity: 0,
        tabBarPressColor: "transparent"
      }}
      initialRouteName={initialRoute}
      backBehavior="initialRoute"
    >
      <Tab.Screen
        name="Register"
        options={{
          tabBarLabel: "Criar conta"
        }}
        component={Login}
      />
      <Tab.Screen
        name="Login"
        options={{ tabBarLabel: "Entrar" }}
        component={Login}
      />
    </Tab.Navigator>
  );
}
