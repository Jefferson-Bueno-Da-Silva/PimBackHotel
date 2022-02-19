import React, { createContext, useMemo, useReducer } from 'react';
import Auth from './Modules/auth';
import AuthReducer, { DEFAULT_AUTH_STATE } from './reducers/AuthReducer';

import { IAuthContext } from '../interfaces';

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
    const [authState, authDispatch] = useReducer(AuthReducer, DEFAULT_AUTH_STATE);
    const auth = useMemo(() => new Auth(authState, authDispatch), [authState]);

    return <AuthContext.Provider value={{ auth }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
