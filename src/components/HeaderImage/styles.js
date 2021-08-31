import { StyleSheet } from "react-native";
import { primary } from "../../styles/colors";
import { fonts } from "../../styles/fonts";
import { shadow } from '../../styles/shadow';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 260,

    alignItems: "flex-start",
    justifyContent: 'flex-end',

    ...shadow.shadow5
  },
  imageSource: {
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  title: {
    ...fonts.title,
    color: primary.White,
    marginHorizontal: 16,
  },
})