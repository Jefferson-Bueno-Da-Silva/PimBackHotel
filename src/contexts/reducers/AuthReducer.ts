export interface AuthState {
    token: string;
    user: { id: number };
}

export interface SetSession {
    type: 'setUserSession';
    payload: AuthState;
}

export interface ResetSession {
    type: 'resetUserSession';
}

export type AuthActions = SetSession | ResetSession;

export const DEFAULT_AUTH_STATE: AuthState = {
    token: '',
    user: null,
};

const AuthReducer = (state: AuthState, action: AuthActions): AuthState => {
    switch (action.type) {
        case 'resetUserSession': {
            return DEFAULT_AUTH_STATE;
        }

        case 'setUserSession': {
            return action.payload;
        }

        default:
            return state;
    }
};

export default AuthReducer;
