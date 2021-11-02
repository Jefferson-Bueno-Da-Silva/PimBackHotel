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
  const [list, setList] = useState(rooms.getRooms);

  useEffect(() => {
    (async () => {
      await rooms.getAll();
    })();
  }, []);

  useEffect(
    () => {
      if (!!!value) {
        setList(rooms.getRooms);
      }
    },
    [value]
  );

  const onPressSearch = () => {
    if (!!value) {
      const filter = list.filter(item => {
        return item.description
          .toLowerCase()
          .includes(value.toString().toLowerCase());
      });

      setList(filter);
    }
  };

  const navigateToDetails = item => {
    navigation.navigate("Details", item);
  };

  return (
    <View style={styles.container}>
      <Header value={value} setValue={setValue} onPressSearch={onPressSearch} />
      <FlatList
        data={list}
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
