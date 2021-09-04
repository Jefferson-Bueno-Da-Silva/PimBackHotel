import React, { useState } from 'react';
import { View } from 'react-native';
import { DatePicker, LargeButton, Picker } from '../../components';
import { hotelData } from '../../utils/apiMock';

import { styles } from './styles';

const Reserve = () => {
  return (
    <>
      <DatePicker/>
      <Picker Occupation={hotelData[0].Occupation} />
      <View style={styles.buttonContainer}>
        <LargeButton onPress={() => {}} buttonText="Confirmar" />
      </View>
    </>
  );
}

export default Reserve;