import { StyleSheet } from "react-native";
import { primary } from "../../styles/colors";
import { fonts } from "../../styles/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 16
  },
  buttonContainer: {
    height: 50,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    paddingVertical: 16
  },
  primaryColor: {
    backgroundColor: primary.ChineseBlack
  },
  secondaryColor: {
    backgroundColor: primary.AntiFlashWhite
  },
  primaryText: {
    color: primary.White
  },
  secondaryText: {
    color: primary.ChineseBlack
  },
  buttonText: {
    ...fonts.captionBold
  }
});
