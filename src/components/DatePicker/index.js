import React from 'react'
import { View } from 'react-native'
import DateButton from './Date'

import { styles } from './styles'

const DatePicker = () => {
  return (
    <View style={styles.container}>
      <DateButton/>
      <View style={styles.line} />
      <DateButton/>
    </View>
  )
}

export default DatePicker
