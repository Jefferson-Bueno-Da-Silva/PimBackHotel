import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { primary } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: getStatusBarHeight(),
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: primary.Lotion
  },
  imageContainer: {
    paddingTop: 16
  },
  textContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: { textAlign: "center" },
  subTitle: { textAlign: "center", marginTop: 16 },
  buttonsContainer: {
    flexGrow: 1,
    width: "100%"
  },
  termsContainer: {
    width: "100%"
  },
  termsText: {
    color: primary.ChineseBlack,
    textAlign: "center",
    marginTop: 16
  },
  termsTextLink: {
    color: primary.Accept
  }
});
