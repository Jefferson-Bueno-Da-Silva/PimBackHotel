import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/core'
import { DatePicker, LargeButton, Picker } from '../../components';
import { hotelData } from '../../utils/apiMock';

import { styles } from './styles';

const Reserve = () => {
  const navigation = useNavigation()
  const moveToFinished = useCallback(()=> {
    navigation.navigate('Finished')
  }, [])
  return (
    <>
      <DatePicker/>
      <Picker Occupation={hotelData[0].Occupation} />
      <View style={styles.buttonContainer}>
        <LargeButton onPress={moveToFinished} buttonText="Confirmar" />
      </View>
    </>
  );
}

export default Reserve;