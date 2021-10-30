import React, { useCallback } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

import { Entypo } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

import { styles } from "./styles";
import { primary } from "../../styles/colors";

const ListView = ({ data, onPress, booking }) => {
  const { image, description, roomCategory } = data;

  const formatDate = useCallback(
    date => {
      return `${new Date(date).getUTCDay()}/${new Date(
        date
      ).getUTCMonth()}/${new Date(date).getFullYear()}`;
    },
    [booking]
  );

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />

      <View style={styles.dataContainer}>
        <Text style={styles.title}>{description}</Text>

        <View style={styles.footerContainer}>
          <View style={styles.locationContainer}>
            {!!booking && (
              <View style={{ flex: 1 }}>
                <View style={styles.locationContainer}>
                  <Octicons
                    name="sign-in"
                    size={18}
                    color="black"
                    style={{ marginRight: 8 }}
                  />
                  <Text style={styles.location}>
                    {formatDate(booking.data_entrada)}
                  </Text>
                </View>

                <View style={styles.locationContainer}>
                  <Octicons
                    name="sign-out"
                    size={18}
                    color="black"
                    style={{ marginRight: 8 }}
                  />
                  <Text style={styles.location}>
                    {formatDate(booking.data_saida)}
                  </Text>
                </View>
              </View>
            )}

            {!!roomCategory && (
              <>
                <Entypo
                  name="location-pin"
                  size={15}
                  color={primary.ChineseBlack}
                />
                <Text style={styles.location}>{roomCategory.categoryName}</Text>
              </>
            )}
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
