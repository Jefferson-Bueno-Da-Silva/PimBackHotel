import React from 'react';
import { IAuth } from '../../interfaces';
import api from '../../services/api';
import {
    signIn,
    register,
    LoginRequest,
    LoginResponse,
    RegisterRequest,
} from '../../services/api/auth';
import { AuthActions, AuthState } from '../reducers/AuthReducer';

class Auth implements IAuth {
    constructor(
        public authState: AuthState,
        private authDispatch: React.Dispatch<AuthActions>
    ) {}

    async signIn(loginData: LoginRequest): Promise<LoginResponse> {
        return (await signIn(loginData)).data;
    }

    async register(
        registerData: RegisterRequest
    ): Promise<LoginResponse> {
        return (await register(registerData)).data;
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
            api.defaults.headers.common[
                'Authorization'
            ] = `Bearer ${token}`;
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
