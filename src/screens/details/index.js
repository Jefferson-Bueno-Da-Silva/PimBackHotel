import React from 'react'
import { Text, View } from 'react-native'

// components
import { HeaderImage, LargeButton } from '../../components'
import { Ionicons } from '@expo/vector-icons'

// styles
import { styles } from './styles'

// utils
import { hotelData } from '../../utils/apiMock'
import { fonts } from '../../styles/fonts'

const Details = () => {
  return (
    <View style={styles.container}>
      <HeaderImage
        imageUri={hotelData[0].imagePick}
        title={hotelData[0].RoomName}
      />
      <View style={styles.details}>
        <View style={styles.location}>
          <Ionicons name="location-outline" size={24} color="black" />
          <Text style={fonts.captionRegular}>{hotelData[0].location}</Text>
        </View>
        <Text style={fonts.subTitle}>
          R${hotelData[0].price.toFixed(2).replace('.', ',')}
        </Text>
      </View>

      <View style={styles.details}>
        <View style={styles.location}>
          <Text style={fonts.subTitle}>Ocupação</Text>
        </View>
        <Text style={fonts.captionRegular}>
          {hotelData[0].Occupation} Pessoa | {hotelData[0].time} noites
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <LargeButton />
      </View>
      
    </View>
  )
}

export default Details
