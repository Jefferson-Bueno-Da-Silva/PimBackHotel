import React from "react";
import { GestureResponderEvent, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

export type LargeBUttonProps = {
  onPress: (event: GestureResponderEvent) => void
  buttonText: string,
  secondary?: boolean
}

const LargeButton = ({ onPress, buttonText = "", secondary }: LargeBUttonProps) => {
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
