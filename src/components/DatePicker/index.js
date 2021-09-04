import React from "react";
import { View } from "react-native";
import Line from "../Line";
import DateButton from "./Date";

import { styles } from "./styles";

const DatePicker = () => {
  return (
    <View style={styles.container}>
      <DateButton />
      <Line />
      <DateButton />
    </View>
  );
};

export default DatePicker;
