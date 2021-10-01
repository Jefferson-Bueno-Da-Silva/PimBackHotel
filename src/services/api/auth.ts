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

export interface RegisterRequest {
  full_name: string;
  email: string;
  password: string;
}
export type RegisterResponse = {
  message: string;
  token: string;
  user: UserResponse;
};

export const register = (
  registerData: RegisterRequest,
): RegisterResponse => {
  console.log(registerData);
  
  return {
    message: "usuario criado com sucesso",
    token: "1234",
    user: {
      created_at: new Date( Date.now() ),
      updated_at: new Date( Date.now() )
    }
  };
};