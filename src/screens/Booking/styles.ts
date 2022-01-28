import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingTop: getStatusBarHeight()
  },
  space: {},
  flatList: {},
  space: {
    height: 8
  }
});
