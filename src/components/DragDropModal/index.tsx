import React, { forwardRef, useRef } from 'react';
import { View, Text } from 'react-native';
import { Modalize } from 'react-native-modalize';
import SingUp from '../SingUp';
import { primary } from '../../styles/colors';
import { IHandles } from 'react-native-modalize/lib/options';

type Props = {
    [key: string]: React.ReactNode;
};

const DragDropModal = forwardRef<IHandles, Props>((props: { [key: string]: React.ReactNode }, ref): JSX.Element => {
    const { children } = props;
    return (
        <Modalize
            handleStyle={{ backgroundColor: primary.borderColor }}
            snapPoint={500}
            handlePosition='inside'
            childrenStyle={{
                paddingTop: 32,
            }}
            ref={ref}
        >
            {children}
        </Modalize>
    );
});

export default DragDropModal;
