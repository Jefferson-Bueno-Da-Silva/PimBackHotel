import React from "react";
import { FlatList, View } from "react-native";
import { ListView } from "../../components";

import { hotelData } from '../../utils/apiMock'

import { styles } from "./styles";

const Booking = () => {
  return (
    <FlatList
      data={hotelData}
      keyExtractor={(hotelData) => hotelData.id}
      ListHeaderComponent={() => <View style={styles.space} />}
      renderItem={({ item }) => (
        <ListView data={item} onPress={() => {}} />
      )}
    />
  );
};

export default Booking;
