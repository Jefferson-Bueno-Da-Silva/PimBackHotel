import { BookingResponse } from "../../services/api/reserves";

export type BookingState = {
  rooms: BookingResponse[]
  idSelected: number;
}

export type UpdateProductData = {
  type: 'updateBookingsData';
  payload: {
    rooms: BookingResponse[];
  };
};

export type SetIdSelected = {
  type: 'setIdSelected';
  payload: {
    idSelected: number;
  };
};

export type BookingActions = UpdateProductData | SetIdSelected

export const DEFAULT_BOOKING_DATA: BookingResponse = {
  id_reserva: 0,
  checkin: false,
  id_quarto: 0,
  data_entrada: "2021-10-16T16:18:00.000Z",
  data_saida: "2021-10-16T16:18:00.000Z",
  id_user: 10,
  room: {
    id: 1,
    roomNumber: "11 ",
    howManyPeople: 1,
    description: "Suite Unica",
    image: "https://www2.camara.leg.br/atividade-legislativa/comissoes/comissoes-permanentes/cindra/imagens/sem.jpg.gif/image"
  }
};

export const DEFAULT_BOOKING_STATE: BookingState = {
  rooms: [],
  idSelected: null
};

const BookingReducer = (
  state: BookingState,
  action: BookingActions,
): BookingState => {
  switch (action.type) {
    case 'updateBookingsData': {
      const { rooms } = action.payload;
      return {
        ...state,
        rooms
      };
    }
    case 'setIdSelected': {
      return {
        ...state,
        ...action.payload
      }
    }
    default:
      return state;
  }
};

export default BookingReducer;
