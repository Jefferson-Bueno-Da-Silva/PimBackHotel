import React, { useEffect } from "react";
import { FlatList, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ListView } from "../../components";

import { styles } from "./styles";
import { useBookings } from "../../contexts";

const Booking = () => {
  const booking = useBookings();

  const { navigate } = useNavigation();
  const moveToCodeScanner = id => {
    booking.setIdSelected(id);
    navigate("CodeScanner");
  };

  useEffect(() => {
    (async () => {
      await booking.getAll({ checkin: false });
    })();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={booking.getState.rooms}
        keyExtractor={hotelData => hotelData.id_reserva.toString()}
        ListHeaderComponent={() => <View style={styles.space} />}
        renderItem={({ item }) => (
          <ListView
            data={item.room}
            booking={item}
            onPress={() => moveToCodeScanner(item.id_reserva)}
          />
        )}
      />
    </View>
  );
};

export default Booking;
