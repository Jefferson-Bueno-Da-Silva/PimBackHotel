import React, { useContext } from 'react';
import AuthContext from '../contexts/Auth.Context';

const useAuth = () => {
    const { auth = null } = useContext(AuthContext);

    if (!auth) {
        throw new Error('useAuth must be used within an AppProvider.');
    }

    return auth;
};

export default useAuth;
