import React, { useEffect } from "react";
import { FlatList, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ListView } from "../../components";

import { styles } from "./styles";
import { useBookings } from "../../contexts";

const Booking = () => {
  const booking = useBookings();

  const { navigate } = useNavigation();
  const moveToCodeScanner = () => {
    navigate("CodeScanner");
  };

  useEffect(() => {
    (async () => {
      await booking.getAll();
    })();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={booking.getState.rooms}
        keyExtractor={hotelData => hotelData.id}
        ListHeaderComponent={() => <View style={styles.space} />}
        renderItem={({ item }) => (
          <ListView
            data={item.room}
            booking={item}
            onPress={moveToCodeScanner}
          />
        )}
      />
    </View>
  );
};

export default Booking;
