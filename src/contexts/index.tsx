import React, { createContext, useContext, useReducer } from 'react';

import Rooms from './Modules/rooms';
import Booking from './Modules/Booking';

import AuthReducer, { DEFAULT_AUTH_STATE } from './reducers/AuthReducer';
import RoomsReducer, { DEFAULT_ROOMS_STATE } from './reducers/RoomsReducer';
import BookingReducer, { DEFAULT_BOOKING_STATE } from './reducers/BookingReducer';

const AppContext = createContext({
    rooms: Rooms,
    booking: Booking,
});

export const AppProvider = ({ children }) => {
    const [roomsState, roomsDispatch] = useReducer(RoomsReducer, DEFAULT_ROOMS_STATE);
    const [bookingState, bookingDispatch] = useReducer(BookingReducer, DEFAULT_BOOKING_STATE);

    const rooms = new Rooms(roomsState, roomsDispatch);
    const booking = new Booking(bookingState, bookingDispatch);

    return (
        <AppContext.Provider
            value={{
                rooms,
                booking,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useRooms = () => {
    const { rooms = null } = useContext(AppContext);
    if (!rooms) {
        throw new Error('useRooms must be used within an AppProvider.');
    }
    return rooms;
};

export const useBookings = () => {
    const { booking = null } = useContext(AppContext);
    if (!booking) {
        throw new Error('useRooms must be used within an AppProvider.');
    }
    return booking;
};
