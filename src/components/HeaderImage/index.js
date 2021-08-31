import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { ImageBackground, Text } from 'react-native'

import { styles } from './styles'

const HeaderImage = ({ imageUri, title }) => {
  return (
    <ImageBackground
      source={{ uri: imageUri }}
      style={styles.container}
      imageStyle={styles.imageSource}
      resizeMode="cover"
    >
      <Text style={styles.title}>{title}</Text>
    </ImageBackground>
  )
}

export default HeaderImage
