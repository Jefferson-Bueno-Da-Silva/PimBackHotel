import React, { createContext, useContext, useReducer } from "react";
import AuthReducer, { DEFAULT_AUTH_STATE } from "./reducers/AuthReducer";
import Auth from "./auth";
import Rooms from "./rooms";
import RoomsReducer, { DEFAULT_ROOMS_STATE } from "./reducers/RoomsReducer";

const AppContext = createContext({
  auth: Auth,
  rooms: Rooms
});

export const AppProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(AuthReducer, DEFAULT_AUTH_STATE);
  const [roomsState, roomsDispatch] = useReducer(
    RoomsReducer,
    DEFAULT_ROOMS_STATE
  );
  const auth = new Auth(authState, authDispatch);
  const rooms = new Rooms(roomsState, roomsDispatch);

  return (
    <AppContext.Provider
      value={{
        auth,
        rooms
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

export const useRooms = () => {
  const { rooms = null } = useContext(AppContext);
  if (!rooms) {
    throw new Error("useRooms must be used within an AppProvider.");
  }
  return rooms;
};
