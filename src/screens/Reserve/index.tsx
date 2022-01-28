import React, { useCallback, useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { DatePicker, LargeButton, Picker } from "../../components";
import { hotelData } from "../../utils/apiMock";

import { styles } from "./styles";
import { useAuth, useBookings } from "../../contexts";

const Reserve = ({ route }) => {
  const navigation = useNavigation();
  const auth = useAuth();
  const booking = useBookings();

  const [occupation, setOccupation] = useState(
    route?.params.howManyPeople || 0
  );

  const [dateEntrada, setDateEntrada] = useState(new Date(Date.now()));
  const [dateSaida, setDateSaida] = useState(new Date(Date.now()));

  const moveToFinished = useCallback(
    async () => {
      const response = await booking.create({
        data_entrada: dateEntrada.toISOString(),
        data_saida: dateSaida.toISOString(),
        id_quarto: route?.params.id,
        id_user: auth.authState.user.id
      });
      if (!!response.status && response.status === 201) {
        navigation.navigate("Finished", {
          text:
            "Quando chegar no Hotel, faça o check-in pelo celular lendo o QR code."
        });
      }
    },
    [dateEntrada, dateSaida]
  );

  return (
    <>
      <DatePicker
        dateEntrada={dateEntrada}
        setDateEntrada={setDateEntrada}
        dateSaida={dateSaida}
        setDateSaida={setDateSaida}
      />
      <Picker occupation={occupation} />
      <View style={styles.buttonContainer}>
        <LargeButton onPress={moveToFinished} buttonText="Confirmar" />
      </View>
    </>
  );
};

export default Reserve;
