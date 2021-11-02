import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet, Button, Alert } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

import { styles } from "./styles";
import { useBookings } from "../../contexts";

export default function CodeScanner() {
  const { navigate } = useNavigation();
  const booking = useBookings();

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      Alert.alert(
        "Atenção",
        "Leia o QR code na recepção do hotel para finalizar seu check-in"
      );
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
      handleBarCodeScanned({});
    })();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);

    const response = await booking.checkin(booking.getIdSelected, {
      checkin: true
    });

    if (!!response.status && response.status === 200) {
      navigate("Finished", {
        text: "Check-in finalizado, passe na recepção e pegue sua chave"
      });
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
        type="back"
      />
    </View>
  );
}
