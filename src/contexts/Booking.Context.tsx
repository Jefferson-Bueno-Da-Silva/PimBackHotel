import React, { createContext, useContext, useMemo, useReducer } from 'react';
import { IBookingContext } from '../interfaces';

import Booking from './Modules/Booking';
import BookingReducer, { DEFAULT_BOOKING_STATE } from './reducers/BookingReducer';

const BookingContext = createContext<IBookingContext>({} as IBookingContext);

export const BookingProvider = ({ children }) => {
    const [bookingState, bookingDispatch] = useReducer(BookingReducer, DEFAULT_BOOKING_STATE);
    const booking = useMemo(() => new Booking(bookingState, bookingDispatch), [bookingState]);

    return (
        <BookingContext.Provider
            value={{
                booking,
            }}
        >
            {children}
        </BookingContext.Provider>
    );
};

export default BookingContext;
