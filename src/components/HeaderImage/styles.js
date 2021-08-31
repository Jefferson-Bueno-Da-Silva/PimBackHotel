import { StyleSheet } from "react-native";
import { primary } from "../../styles/colors";
import { fonts } from "../../styles/fonts";
import { shadow } from '../../styles/shadow';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 340,

    alignItems: "flex-start",
    justifyContent: 'flex-end',

    ...shadow.shadow5
  },
  imageSource: {
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  title: {
    ...fonts.subTitle,
    color: primary.White,
    marginHorizontal: 16,
  },
})