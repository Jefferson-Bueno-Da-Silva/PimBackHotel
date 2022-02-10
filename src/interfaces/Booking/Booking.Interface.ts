import { bodyCheckin, bodyReserves, BookingResponse, createResponse, params } from '../../services/api/reserves';

interface IBooking {
    getAll(params: params): Promise<null | BookingResponse[]>;

    create(body: bodyReserves): Promise<null | createResponse>;
    checkin(id: number, body: bodyCheckin): Promise<null | bodyCheckin>;
    getIdSelected: number;
    getRooms: BookingResponse[];
    updateBookingsData(rooms: BookingResponse[]): void;
    setIdSelected(id: number): void;
}

export default IBooking;
