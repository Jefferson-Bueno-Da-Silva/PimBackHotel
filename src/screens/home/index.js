import React, { useCallback, useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { Header, ListView } from "../../components";
import { useNavigation } from "@react-navigation/core";

import { styles } from "./styles";
import { useRooms } from "../../contexts";

const Home = () => {
  const navigation = useNavigation();
  const navigateToDetails = item => {
    navigation.navigate("Details", item);
  };
  const rooms = useRooms();

  useEffect(() => {
    (async () => {
      await rooms.getAll();
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Header /* uriProfile={userData.profileImage} */ />
      <FlatList
        data={rooms.getRooms}
        keyExtractor={hotelData => hotelData.id.toString()}
        ListHeaderComponent={() => <View style={styles.space} />}
        renderItem={({ item }) => (
          <ListView data={item} onPress={() => navigateToDetails(item)} />
        )}
        style={styles.flatList}
      />
    </View>
  );
};
export default Home;
