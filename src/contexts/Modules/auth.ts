import React from 'react';
import { IAuth } from '../../interfaces';
import api from '../../services/api';
import { signIn, register, LoginRequest, LoginResponse, RegisterRequest } from '../../services/api/auth';
import { AuthActions, AuthState } from '../reducers/AuthReducer';

class Auth implements IAuth {
    constructor(private authState: AuthState, private authDispatch: React.Dispatch<AuthActions>) {}

    async signIn(loginData: LoginRequest): Promise<LoginResponse> {
        return signIn(loginData)
            .then((response) => response.data)
            .catch((error) => {
                console.error(error.message);
                return null;
            });
    }

    async register(registerData: RegisterRequest): Promise<LoginResponse> {
        return register(registerData)
            .then((response) => response.data)
            .catch((error) => {
                console.error(error);
                return null;
            });
    }

    isLogged(): boolean {
        return !!this.authState.token;
    }

    signOut(): void {
        this.authDispatch({
            type: 'resetUserSession',
        });
        //dispatch para limpar os dados do usuário e produtos
    }

    setAxiosToken(token: string): void {
        if (token) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            api.defaults.headers.common['Authorization'] = null;
        }
    }

    setSessionFromLogin(loginData: LoginResponse): void {
        this.setAxiosToken(loginData.token);
        this.authDispatch({
            type: 'setUserSession',
            payload: loginData,
        });
    }
}

export default Auth;
