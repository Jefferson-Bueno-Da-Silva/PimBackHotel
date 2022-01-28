import React from "react";
import api from "../services/api";
import { signIn, register } from "../services/api/auth";
import { AuthActions, AuthState } from "./reducers/AuthReducer";

export default class Auth {
  constructor(private authState: AuthState, private authDispatch: React.Dispatch<AuthActions>) {
    
  }

  signIn = loginData => signIn(loginData);

  register = registerData => register(registerData);

  isLogged() {
    return !!this.authState.token;
  }

  signOut() {
    this.authDispatch({
      type: "resetUserSession"
    });
    //dispatch para limpar os dados do usuário e produtos
  }

  setAxiosToken(token) {
    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
    } else {
      api.defaults.headers.Authorization = null;
    }
  }

  setSessionFromLogin(loginData) {
    this.setAxiosToken(loginData.token);
    this.authDispatch({
      type: "setUserSession",
      payload: loginData
    });
  }
}
