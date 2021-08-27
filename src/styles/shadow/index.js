import { StyleSheet } from "react-native";
import { primary } from "../colors";

export const shadow = StyleSheet.create({
  shadow10: {
    shadowColor: primary.ChineseBlack,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    
    elevation: 10,
  }
})