import { StyleSheet } from "react-native";
import { fonts } from "../../styles/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
  },
  title: {
    ...fonts.title
  },
  paragraph: {
    textAlign: 'center',
    ...fonts.subTitle
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 16,
    left: 0,
    right: 0,
  },
});
