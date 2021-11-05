import api from "../services/api";
import { signIn, register } from "../services/api/auth";

export default class Auth {
  constructor(authState, authDispatch) {
    this.authState = authState;
    this.authDispatch = authDispatch;
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
