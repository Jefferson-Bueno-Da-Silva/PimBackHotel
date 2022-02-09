import { AxiosResponse } from 'axios';
import { LoginRequest, LoginResponse, RegisterRequest } from '../../services/api/auth';

interface IAuth {
    signIn(loginData: LoginRequest): Promise<LoginResponse>;

    register(registerData: RegisterRequest): Promise<LoginResponse>;

    isLogged(): boolean;

    signOut(): void;

    setAxiosToken(token: string): void;

    setSessionFromLogin(loginData: LoginResponse): void;
}

export default IAuth;
