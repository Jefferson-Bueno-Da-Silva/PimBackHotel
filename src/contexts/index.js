import React, { createContext, useContext, useReducer } from "react";

import Auth from "./auth";
import Rooms from "./rooms";
import Booking from "./Booking";

import AuthReducer, { DEFAULT_AUTH_STATE } from "./reducers/AuthReducer";
import RoomsReducer, { DEFAULT_ROOMS_STATE } from "./reducers/RoomsReducer";
import BookingReducer, {
  DEFAULT_BOOKING_STATE
} from "./reducers/BookingReducer";

const AppContext = createContext({
  auth: Auth,
  rooms: Rooms,
  booking: Booking
});

export const AppProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(AuthReducer, DEFAULT_AUTH_STATE);
  const [roomsState, roomsDispatch] = useReducer(
    RoomsReducer,
    DEFAULT_ROOMS_STATE
  );
  const [bookingState, bookingDispatch] = useReducer(
    BookingReducer,
    DEFAULT_BOOKING_STATE
  );

  const auth = new Auth(authState, authDispatch);
  const rooms = new Rooms(roomsState, roomsDispatch);
  const booking = new Booking(bookingState, bookingDispatch);

  return (
    <AppContext.Provider
      value={{
        auth,
        rooms,
        booking
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

export const useBookings = () => {
  const { booking = null } = useContext(AppContext);
  if (!booking) {
    throw new Error("useRooms must be used within an AppProvider.");
  }
  return booking;
};
