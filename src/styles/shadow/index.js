import { StyleSheet } from "react-native";
import { primary } from "../colors";

export const shadow = StyleSheet.create({
  shadow20: {
    shadowColor: primary.ChineseBlack,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
  }
})