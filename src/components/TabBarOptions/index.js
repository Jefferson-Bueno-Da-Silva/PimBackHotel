import React from 'react';
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { ActiveBooking, ActiveHome, DeactivateBooking, DeactivateHome } from "../../assets";

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
/**
 * @type { BottomTabNavigationOptions }
 */
export const TabBarOptionsBooking = {
  tabBarIcon: ({focused}) => (
    focused ? 
      <ActiveBooking/>
      :
      <DeactivateBooking/>
  )
}
