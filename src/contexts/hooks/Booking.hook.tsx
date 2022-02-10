import { useContext } from 'react';
import BookingContext from '../Booking.Context';

export const useBookings = () => {
    const { booking = null } = useContext(BookingContext);
    if (!booking) {
        throw new Error('useRooms must be used within an AppProvider.');
    }
    return booking;
};
