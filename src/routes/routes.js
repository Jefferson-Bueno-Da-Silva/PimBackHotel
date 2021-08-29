// In App.js in a new project
import * as React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../screens/home'

const Stack = createNativeStackNavigator()

function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={'Home'}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

export default Routes
