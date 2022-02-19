import { params, RoomsResponse } from '../../services/api/rooms';

interface IRooms {
    getAll(params?: params, concatItem?: RoomsResponse[]): Promise<null | RoomsResponse[]>;

    updateRoomsData(rooms: RoomsResponse[]): Promise<void>;

    getRooms(): RoomsResponse[];
}

export default IRooms;
