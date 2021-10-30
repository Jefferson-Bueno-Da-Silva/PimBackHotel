import { AxiosResponse } from "axios";
import api from ".";

export interface UserResponse {
  id: number;
  name: string;
  email: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export type LoginResponse = { token: string; user: UserResponse };

export const signIn = (
  loginData: LoginRequest,
): Promise<AxiosResponse<LoginResponse>> => {
  return api.post<LoginResponse>('/auth/login', loginData);
};

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export const register = (
  registerData: RegisterRequest,
): Promise<AxiosResponse<LoginResponse>> => {
  return api.post<LoginResponse>('/auth/register', registerData);
};