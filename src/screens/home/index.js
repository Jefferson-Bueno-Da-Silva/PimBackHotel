import React from "react";
import { View, FlatList } from "react-native";
import { Header, ListView } from "../../components";
import { userData, hotelData } from "../../utils/apiMock";
import { useNavigation } from "@react-navigation/core";

import { styles } from "./styles";

const Home = () => {
  const navigation = useNavigation();
  const navigateToDetails = item => {
    navigation.navigate("Details", item);
  };
  return (
    <View style={styles.container}>
      <Header /* uriProfile={userData.profileImage} */ />
      <FlatList
        data={hotelData}
        keyExtractor={hotelData => hotelData.id}
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
