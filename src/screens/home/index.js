import React from 'react'
import { View, FlatList } from 'react-native'
import { Header, ListView } from '../../components'
import { userData, hotelData } from '../../utils/apiMock'

import { styles } from './styles'

const Home = () => {
  return (
    <View style={styles.container}>
      <Header uriProfile={userData.profileImage} />
      <FlatList
        data={hotelData}
        keyExtractor={(hotelData) => hotelData.id}
        renderItem={({ item }) => <ListView data={item} />}
        style={styles.flatList}
      />
    </View>
  )
}

export default Home
