import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { primary } from '../../styles/colors';
import { shadow } from '../../styles/shadow';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 260,

    paddingTop: getStatusBarHeight() - 16,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    
    backgroundColor: primary.Lotion,
    ...shadow.shadow10
  },
  logo:{
    width: 200,
    marginTop: -8,
    marginLeft: 8
  },
  top:{
    flexDirection: "row",
    alignContent: 'center',
    marginRight: 16,
  },
  middle: {
    flex: 1,
    paddingHorizontal: 16,
  },
  bottom: {
    flex: 1,
  },
});
