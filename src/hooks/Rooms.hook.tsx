import { useContext } from 'react';
import RoomsContext from '../contexts/Rooms.Context';

const useRooms = () => {
    const { rooms = null } = useContext(RoomsContext);
    if (!rooms) {
        throw new Error('useRooms must be used within an AppProvider.');
    }
    return rooms;
};

export default useRooms;
