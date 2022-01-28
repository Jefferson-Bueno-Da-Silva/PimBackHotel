import React from "react";
import { Text, TextInput, View } from "react-native";
import { fonts } from "../../styles/fonts";

import { styles } from "./styles";

const InputLabel = ({ label, ...rest }) => {
  return (
    <>
      <Text style={[fonts.mediumSemiBold]}>{label}</Text>
      <TextInput style={styles.input} {...rest} />
    </>
  );
};

export default InputLabel;
