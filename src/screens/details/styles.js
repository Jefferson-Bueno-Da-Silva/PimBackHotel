import { StyleSheet } from "react-native";
import { primary } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  location: {
    width: '60%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  details: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 16,
    borderBottomColor: primary.ChineseBlack,
    borderBottomWidth: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 16,
    left: 0,
    right: 0,
  },
})