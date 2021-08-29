import { StyleSheet } from 'react-native'
import { primary } from '../colors'

export const shadow = StyleSheet.create({
  shadow10: {
    shadowColor: primary.ChineseBlack,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  shadow3: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    
    elevation: 3,
  },
})
