import { StyleSheet } from "react-native";
import { primary } from "../../styles/colors";

export const styles = StyleSheet.create({
  header: {
    height: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16
  },
  active: {
    color: primary.ChineseBlack
  },
  deactivate: {
    color: primary.ChineseBlackTransparent
  }
});
