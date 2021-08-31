import React from 'react'
import { View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { LinearGradient } from 'expo-linear-gradient'

import { styles } from './styles.js'
import { primary } from '../../styles/colors/index.js'
import Plane1 from '../../assets/planes/plane1.js'
import Plane2 from '../../assets/planes/plane2.js'
import Plane3 from '../../assets/planes/plane3.js'
import Plane4 from '../../assets/planes/plane4.js'

const Background = ({ children }) => {
  return (
    <LinearGradient
      colors={[primary.AntiFlashWhite, primary.Lotion]}
      style={styles.container}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <View style={styles.plane1}>
        <Plane1 />
      </View>
      <View style={styles.plane2}>
        <Plane2 />
      </View>
      <View style={styles.plane3}>
        <Plane3 />
      </View>
      <View style={styles.plane4}>
        <Plane4 />
      </View>
      {children}
    </LinearGradient>
  )
}
export default Background