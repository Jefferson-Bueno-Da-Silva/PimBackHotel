import React, { forwardRef, useRef } from 'react';
import { Modalize } from 'react-native-modalize';
import { primary } from '../../styles/colors';
import { IHandles } from 'react-native-modalize/lib/options';

type DragDropModalProps = {
    children: React.ReactNode;
};

const DragDropModal: React.ForwardRefRenderFunction<IHandles, DragDropModalProps> = (
    { children },
    ref,
): JSX.Element => {
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
};

export default forwardRef(DragDropModal);
