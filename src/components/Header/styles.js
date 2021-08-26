import { StyleSheet } from 'react-native'
import { primary } from '../../styles/colors'
import { shadow } from '../../styles/shadow'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 225,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: primary.Lotion,
    ...shadow.shadow20
  },
})
