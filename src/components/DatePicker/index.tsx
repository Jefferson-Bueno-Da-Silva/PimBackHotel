import React from "react";
import { View } from "react-native";
import Line from "../Line";
import DateButton from "./Date";

import { styles } from "./styles";

const DatePicker = ({
  dateEntrada,
  setDateEntrada,
  dateSaida,
  setDateSaida
}) => {
  return (
    <View style={styles.container}>
      <DateButton date={dateEntrada} setDate={setDateEntrada} />
      <Line />
      <DateButton date={dateSaida} setDate={setDateSaida} />
    </View>
  );
};

export default DatePicker;
