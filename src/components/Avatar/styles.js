import { StyleSheet } from "react-native";
import { primary } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  profile: {
    borderRadius: 50,
    borderColor: primary.ChineseBlack,
    borderWidth: 1,
  },
})