import React from 'react';
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { ActiveHome, DeactivateHome } from "../../assets";

/**
 * @type { BottomTabNavigationOptions }
 */
export const TabBarOptionsHome = {
  tabBarIcon: ({focused}) => (
    focused ? 
      <ActiveHome/>
      :
      <DeactivateHome/>
  )
}