import { useContext } from 'react';
import RoomsContext from '../Rooms.Context';

export const useRooms = () => {
    const { rooms = null } = useContext(RoomsContext);
    if (!rooms) {
        throw new Error('useRooms must be used within an AppProvider.');
    }
    return rooms;
};
