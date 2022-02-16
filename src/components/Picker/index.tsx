import React, { useCallback, useEffect, useState } from 'react';

import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import {
    Container,
    PickerButton,
    PickerDropDownContainer,
} from './styles';

import { ListItemContainer } from './components';
import { shadow } from '../../styles/shadow';
import {
    IconContainer,
    TextButton,
} from './components/ListItemContainer/styles';

const Picker = ({ occupation }) => {
    const [open, setOpen] = useState(false);
    const [textShow, setTextShow] = useState('Pessoa');
    const [value, setValue] = useState(1);

    useEffect(() => {
        if (value === 1) {
            setTextShow('Pessoa');
        } else {
            setTextShow('Pessoas');
        }
    }, [value]);

    const itemClick = useCallback(
        (item) => {
            setValue(item);
            setOpen(false);
        },
        [value]
    );

    const toggleModal = useCallback(() => {
        setOpen(!open);
    }, [open]);

    return (
        <Container style={shadow.shadow5}>
            <PickerButton activeOpacity={0.7} onPress={toggleModal}>
                <IconContainer>
                    <Ionicons name='person' size={16} color='black' />
                    <TextButton>
                        {value} {textShow}
                    </TextButton>
                </IconContainer>
                <MaterialIcons
                    name='keyboard-arrow-down'
                    size={24}
                    color='black'
                />
            </PickerButton>

            {open && (
                <PickerDropDownContainer>
                    {ListItemContainer({
                        occupation,
                        onPress: itemClick,
                    }).map((Item) => Item)}
                </PickerDropDownContainer>
            )}
        </Container>
    );
};

export default Picker;
