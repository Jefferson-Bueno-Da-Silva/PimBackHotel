import React, { useCallback, useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { Header, ListView } from "../../components";
import { useNavigation } from "@react-navigation/core";

import { styles } from "./styles";
import { useRooms } from "../../contexts";

const Home = () => {
  const navigation = useNavigation();
  const rooms = useRooms();

  const [value, setValue] = useState();

  useEffect(() => {
    (async () => {
      await rooms.getAll();
    })();
  }, []);

  const navigateToDetails = item => {
    navigation.navigate("Details", item);
  };

  return (
    <View style={styles.container}>
      <Header value={value} setValue={setValue} onPressSearch={() => {}} />
      <FlatList
        data={
          !!value
            ? rooms.getRooms.filter(item => {
                return item.description
                  .toLowerCase()
                  .includes(value.toString().toLowerCase());
              })
            : rooms.getRooms
        }
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
