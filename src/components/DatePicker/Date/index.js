import React, { useState } from 'react'
import { Text, View, TouchableOpacity, Platform } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import DateTimePicker from '@react-native-community/datetimepicker'
import { styles } from '../styles';

const DateButton = () => {
  const [date, setDate] = useState(new Date(1598051730000))
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date
    setShow(Platform.OS === 'ios')
    setDate(currentDate)
  }

  const showMode = (currentMode) => {
    setShow(true)
    setMode(currentMode)
  }

  const showDatepicker = () => {
    showMode('date')
  }
  return (
    <>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={showDatepicker}
      >
        <MaterialCommunityIcons name="calendar-blank" size={16} color="black" />
        <Text style={styles.textButton}>{date.toDateString()}</Text>
      </TouchableOpacity>
      <View>
        {show && (
          <>
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          </>
        )}
      </View>
    </>
  );
};

export default DateButton;
