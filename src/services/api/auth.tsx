export interface UserResponse {
  created_at: Date;
  updated_at: Date;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export type LoginResponse = { token: string; user: UserResponse };

export const signIn = (
  loginData: LoginRequest,
): LoginResponse => {
  return ({
    token: 'new token create',
    user: {
      created_at: new Date( Date.now() ),
      updated_at: new Date( Date.now() )
    }
  });
};