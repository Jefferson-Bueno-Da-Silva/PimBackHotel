import React from 'react'
import { Image, View } from 'react-native'
import { profile } from '../../assets'

import { styles } from './styles'

export const sizeTypeProp = {
  small: 48,
  medium: 58,
}

/**
 * Retorna o Avatar
 * @param {'small' | 'medium'} props.sizeType
 * @returns
 */
const Avatar = ({ sizeType }) => {
  return (
    <View style={styles.container}>
      <Image
        source={profile}
        style={[
          styles.profile,
          { height: sizeTypeProp[sizeType], width: sizeTypeProp[sizeType] },
        ]}
      />
    </View>
  )
}

export default Avatar
