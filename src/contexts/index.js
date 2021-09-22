import React, { createContext, useContext, useReducer } from "react";
import Auth from "./auth";
import AuthReducer, { DEFAULT_AUTH_STATE } from "./reducers/AuthReducer";

const AppContext = createContext({
  auth: Auth
});

export const AppProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(AuthReducer, DEFAULT_AUTH_STATE);
  const auth = new Auth(authState, authDispatch);

  return (
    <AppContext.Provider
      value={{
        auth
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAuth = () => {
  const { auth = null } = useContext(AppContext);

  if (!auth) {
    throw new Error("useAuth must be used within an AppProvider.");
  }

  return auth;
};
