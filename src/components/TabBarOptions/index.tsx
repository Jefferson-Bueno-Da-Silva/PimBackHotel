import React from 'react';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import {
    ActiveBooking,
    ActiveHome,
    DeactivateBooking,
    DeactivateHome,
} from '../../assets';

export const TabBarOptionsHome: BottomTabNavigationOptions = {
    tabBarIcon: ({ focused }) =>
        focused ? <ActiveHome /> : <DeactivateHome />,
};

export const TabBarOptionsBooking: BottomTabNavigationOptions = {
    tabBarIcon: ({ focused }) =>
        focused ? <ActiveBooking /> : <DeactivateBooking />,
};
