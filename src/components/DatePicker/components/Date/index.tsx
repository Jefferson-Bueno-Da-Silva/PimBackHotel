import React, { useState } from 'react';
import { View, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button, TextButton } from '../../styles';
import { formatDate } from '../../../../utils/formatDate';

const DateButton = ({ date, setDate }) => {
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showDatepicker = () => {
        setShow(true);
    };
    return (
        <>
            <Button activeOpacity={0.7} onPress={showDatepicker}>
                <MaterialCommunityIcons name='calendar-blank' size={16} color='black' />
                <TextButton>{formatDate(date)}</TextButton>
            </Button>
            <View>
                {show && (
                    <>
                        <DateTimePicker
                            testID='dateTimePicker'
                            value={date}
                            mode={'date'}
                            is24Hour={true}
                            display='default'
                            onChange={onChange}
                        />
                    </>
                )}
            </View>
        </>
    );
};

export default DateButton;
