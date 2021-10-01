import { signIn, register } from "../services/api/auth";

export default class Auth {
  constructor(authState, authDispatch) {
    this.authState = authState;
    this.authDispatch = authDispatch;
  }

  signIn(loginData) {
    return signIn(loginData);
  }

  signOut() {
    this.authDispatch({
      type: "resetUserSession"
    });
    //dispatch para limpar os dados do usuário e produtos
  }

  isLogged() {
    return !!this.authState.token;
  }

  setSessionFromLogin(loginData) {
    this.authDispatch({
      type: "setUserSession",
      payload: loginData
    });
  }

  refreshUserProfile(userData) {
    const { token, ...user } = userData;
    this.authDispatch({
      type: "setUserSession",
      payload: {
        token,
        user
      }
    });
  }

  register = registerData => register(registerData);
}
