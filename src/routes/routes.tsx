import React, { useEffect, useState } from 'react';

import Auth from './Auth.routes';
import PrivateRoutes from './App.routes';
import { useAuth } from '../contexts/hooks';

const Routes: React.FC = () => {
    const authContext = useAuth();
    return authContext.isLogged() ? <PrivateRoutes /> : <Auth />;
};

export default Routes;
