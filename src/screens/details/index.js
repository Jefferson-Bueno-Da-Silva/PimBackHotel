import React, { useCallback, useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

// components
import { HeaderImage, LargeButton } from "../../components";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

// styles
import { styles } from "./styles";

// utils
import { fonts } from "../../styles/fonts";

const DEFAULT = {
  id: "1234",
  imagePick:
    "https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/601082646d6bf4446451b0a4_6002086f72b72717ae01d954_google-doc-error-message.png",
  RoomName: "Sem Nome",
  location: "Sem Local",
  occupation: 0,
  time: 0,
  price: 0.0
};

const Details = ({ route }) => {
  const navigation = useNavigation();
  const [hotelData, setHotelData] = useState(DEFAULT);
  const moveToReserves = useCallback(() => {
    navigation.navigate("Reserve", route?.params);
  }, []);

  useEffect(
    () => {
      if (!!route?.params) {
        setHotelData(route?.params);
      }
    },
    [route]
  );

  return (
    <>
      <ScrollView style={styles.container}>
        <HeaderImage
          imageUri={hotelData.imagePick}
          title={hotelData.RoomName}
        />
        <View style={styles.details}>
          <View style={styles.location}>
            <Ionicons name="location-outline" size={24} color="black" />
            <Text style={fonts.captionRegular}>{hotelData.location}</Text>
          </View>
          <Text style={fonts.subTitle}>
            R${hotelData.price.toFixed(2).replace(".", ",")}
          </Text>
        </View>

        <View style={styles.details}>
          <View style={styles.location}>
            <Text style={fonts.subTitle}>Ocupação</Text>
          </View>
          <Text style={fonts.captionRegular}>
            {hotelData.occupation} Pessoa | {hotelData.time} noites
          </Text>
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <LargeButton onPress={moveToReserves} buttonText="Selecionar Quarto" />
      </View>
    </>
  );
};

export default Details;
