import React, { useCallback, useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { DatePicker, LargeButton, Picker } from "../../components";
import { hotelData } from "../../utils/apiMock";

import { styles } from "./styles";

const Reserve = ({ route }) => {
  const navigation = useNavigation();
  const [occupation, setOccupation] = useState(route?.params.occupation || 0);
  const moveToFinished = useCallback(() => {
    navigation.navigate("Finished", {
      text:
        "Quando chegar no Hotel, faça o check-in pelo celular lendo o QR code."
    });
  }, []);
  return (
    <>
      <DatePicker />
      <Picker occupation={occupation} />
      <View style={styles.buttonContainer}>
        <LargeButton onPress={moveToFinished} buttonText="Confirmar" />
      </View>
    </>
  );
};

export default Reserve;
