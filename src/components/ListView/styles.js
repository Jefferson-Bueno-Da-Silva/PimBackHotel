import { StyleSheet } from "react-native";
import { primary } from "../../styles/colors";
import { fonts } from "../../styles/fonts";
import { shadow } from "../../styles/shadow";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    zIndex: 1000,
    borderRadius: 10,
    backgroundColor: primary.White,
    marginHorizontal: 16,
    marginVertical: 8,
    paddingVertical: 16,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    ...shadow.shadow8
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8
  },
  dataContainer: {},
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent'
  },
  title: {
    ...fonts.captionBold,
    color: primary.ChineseBlack,
    backgroundColor: 'transparent'
  },
  locationContainer: {
    flexDirection: "row",
    width: '50%',
    backgroundColor: 'transparent'
  },
  location: {
    ...fonts.tiny,
    color: primary.DarkCharcoal,
    backgroundColor: 'transparent'
  },
  button: {
    backgroundColor: primary.ChineseBlack,
    width: 84,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },
  buttonText:{
    ...fonts.tinyBold,
    color: primary.Lotion,
  }
})