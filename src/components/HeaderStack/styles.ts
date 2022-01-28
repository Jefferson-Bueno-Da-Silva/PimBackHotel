import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { primary } from "../../styles/colors";
import { shadow } from "../../styles/shadow";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 68 + getStatusBarHeight(),
    paddingTop: getStatusBarHeight(),
    backgroundColor: primary.Lotion,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    alignItems:'center',
    justifyContent: 'center',
    ...shadow.shadow8
  },
})