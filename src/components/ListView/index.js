import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

import { Entypo } from "@expo/vector-icons";

import { styles } from "./styles";
import { primary } from "../../styles/colors";

const ListView = ({ data, onPress }) => {
  const { imagePick, RoomName, location } = data;
  return (
    <View style={styles.container}>
      <Image source={{ uri: imagePick }} style={styles.image} />

      <View style={styles.dataContainer}>
        <Text style={styles.title}>{RoomName}</Text>

        <View style={styles.footerContainer}>
          <View style={styles.locationContainer}>
            <Entypo
              name="location-pin"
              size={15}
              color={primary.ChineseBlack}
            />
            <Text style={styles.location}>{location}</Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.button}
            onPress={onPress}
          >
            <Text style={styles.buttonText}>Visualizar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ListView;
