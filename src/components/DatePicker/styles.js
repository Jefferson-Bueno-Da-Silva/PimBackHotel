import { StyleSheet } from "react-native";
import { primary } from "../../styles/colors";
import { fonts } from "../../styles/fonts";
import { shadow } from "../../styles/shadow";

export const styles = StyleSheet.create({
  container: {
    height: 100,
    marginTop: 16,
    marginHorizontal: 16,
    backgroundColor: primary.Lotion,
    borderRadius: 5,
    ...shadow.shadow5
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: primary.CadetGrey,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
  },
  textButton: {
    ...fonts.captionSemiBold,
    color: primary.DarkCharcoal,
    paddingHorizontal: 16,
  },

})