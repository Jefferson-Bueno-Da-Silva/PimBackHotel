import * as React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home, Details, Reserve } from '../screens'
import { HeaderStack } from '../components'

const Stack = createNativeStackNavigator()

function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={'Home'}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen
        options={{ headerShown: true, header: () => <HeaderStack /> }}
        name="Reserve"
        component={Reserve}
      />
    </Stack.Navigator>
  )
}

export default Routes
