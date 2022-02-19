import Auth from '../../contexts/Modules/auth';
import { AuthActions, AuthState } from '../../contexts/reducers/AuthReducer';
import { LoginRequest, LoginResponse, RegisterRequest } from '../../services/api/auth';

interface IAuth {
    authState: AuthState;

    signIn(loginData: LoginRequest): Promise<LoginResponse>;

    register(registerData: RegisterRequest): Promise<LoginResponse>;

    isLogged(): boolean;

    signOut(): void;

    setAxiosToken(token: string): void;

    setSessionFromLogin(loginData: LoginResponse): void;
}

export default IAuth;
