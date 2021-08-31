import { StyleSheet } from "react-native";
import { primary } from "../../styles/colors";
import { shadow } from "../../styles/shadow";

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
    ...shadow.shadow8
  },
})