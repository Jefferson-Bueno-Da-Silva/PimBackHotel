import React, { useState } from 'react';
import TabNavigationModal from '../TabNavigationModal';

import Login from '../../screens/Login';
import Register from '../../screens/Register';

import { Body, Container } from './styles';
import { SingUpRoutes } from '../../interfaces';

const SingUp: React.FC<{ routeName: SingUpRoutes }> = ({ routeName }) => {
    const [active, setActive] = useState<SingUpRoutes>(routeName);

    return (
        <Container>
            <TabNavigationModal active={active} setActive={setActive} />
            <Body>{active ? <Register /> : <Login />}</Body>
        </Container>
    );
};

export default SingUp;
