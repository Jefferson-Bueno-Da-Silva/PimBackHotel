import { useContext } from 'react';
import BookingContext from '../contexts/Booking.Context';

const useBookings = () => {
    const { booking = null } = useContext(BookingContext);
    if (!booking) {
        throw new Error('useRooms must be used within an AppProvider.');
    }
    return booking;
};

export default useBookings