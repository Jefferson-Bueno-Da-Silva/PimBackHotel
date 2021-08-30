import { StyleSheet } from "react-native";
import { primary } from "../../styles/colors";
import { shadow } from "../../styles/shadow";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:  'space-between',
    borderColor: primary.borderColor,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    margin: 16,
    backgroundColor: primary.White,
    ...shadow.shadow3,
  },
  input: {
    color: primary.ChineseBlack
  },
})