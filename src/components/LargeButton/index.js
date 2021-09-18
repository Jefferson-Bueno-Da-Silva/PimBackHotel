import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

const LargeButton = ({ onPress, buttonText = "", secondary }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.buttonContainer,
          secondary ? styles.secondaryColor : styles.primaryColor
        ]}
        onPress={onPress}
        activeOpacity={0.8}
      >
        <Text
          style={[
            styles.buttonText,
            secondary ? styles.secondaryText : styles.primaryText
          ]}
        >
          {buttonText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LargeButton;
