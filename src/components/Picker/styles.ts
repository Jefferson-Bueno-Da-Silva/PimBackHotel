import { StyleSheet } from "react-native";
import { primary } from "../../styles/colors";
import { fonts } from "../../styles/fonts";
import { shadow } from "../../styles/shadow";

export const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginHorizontal: 16,

    backgroundColor: primary.Lotion,
    justifyContent:  'center',
    
    borderRadius: 5,
    ...shadow.shadow5
  },
  button: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textButton: {
    ...fonts.captionSemiBold,
    color: primary.DarkCharcoal,
    marginTop: 2,
    marginHorizontal: 16,
  },
  dropDownContainer: {
    maxHeight: 200,
    paddingHorizontal: 16,
  },
});
