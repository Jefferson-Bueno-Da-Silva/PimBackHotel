import React, { useCallback, useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

// components
import { HeaderImage, LargeButton } from "../../components";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { RoomsResponse } from "../../services/api/rooms";

// styles
import { styles } from "./styles";

// utils
import { fonts } from "../../styles/fonts";

const DEFAULT = {
  id: 1,
  roomNumber: "1",
  howManyPeople: 1,
  description: "nenhum",
  image:
    "https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/601082646d6bf4446451b0a4_6002086f72b72717ae01d954_google-doc-error-message.png",
  roomCategory: {
    id: 1,
    categoryName: "teste",
    qtyBeds: 1,
    value: "1000.00"
  }
};

const Details = ({ route }) => {
  const navigation = useNavigation();
  const [hotelData, setHotelData] = useState(DEFAULT);

  const moveToReserves = useCallback(
    () => {
      navigation.navigate("Reserve", hotelData);
    },
    [hotelData]
  );

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
        {console.log()}
        <HeaderImage imageUri={hotelData.image} title={hotelData.description} />
        <View style={styles.details}>
          <View style={styles.location}>
            <Text style={fonts.subTitle}>Preço:</Text>
          </View>

          <Text style={fonts.captionRegular}>
            R${parseFloat(hotelData.roomCategory.value)
              .toFixed(2)
              .replace(".", ",")}
          </Text>
        </View>

        <View style={styles.details}>
          <View style={styles.location}>
            <Text style={fonts.subTitle}>Ocupação</Text>
          </View>
          <Text style={fonts.captionRegular}>
            {hotelData.howManyPeople} Pessoa
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
