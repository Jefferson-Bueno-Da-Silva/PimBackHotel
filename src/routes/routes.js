import * as React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {Home, Details, Reserve} from '../screens'

const Stack = createNativeStackNavigator()

function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={'Home'}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Reserve" component={Reserve} />
    </Stack.Navigator>
  )
}

export default Routes
