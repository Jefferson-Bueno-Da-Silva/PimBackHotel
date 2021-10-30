import { RoomsResponse } from "../../services/api/rooms";

export type RoomsState = {
  rooms: RoomsResponse[]
}

export type UpdateProductData = {
  type: 'updateRoomsData';
  payload: {
    rooms: RoomsResponse[];
  };
};

export type RoomsActions = UpdateProductData

export const DEFAULT_ROOMS_DATA: RoomsResponse = {
  id: 0,
  roomNumber: '0',
  howManyPeople: 1,
  description: 'Sem Localização',
  image: 'https://www2.camara.leg.br/atividade-legislativa/comissoes/comissoes-permanentes/cindra/imagens/sem.jpg.gif/image',
  roomCategory: {
    id: 10,
    categoryName: "nenhum",
    qtyBeds: 0,
    value: "150000.44"
  }
};

export const DEFAULT_ROOMS_STATE: RoomsState = {
  rooms: [],
};

const RoomsReducer = (
  state: RoomsState,
  action: RoomsActions,
): RoomsState => {
  switch (action.type) {
    case 'updateRoomsData': {
      const { rooms } = action.payload;
      const toUpdate: RoomsResponse[] = [];
      const idsToUpdate: number[] = [];
      return {
        ...state,
        rooms: [
          ...state.rooms.filter((r) => !idsToUpdate.includes(r.id)),
          ...toUpdate,
        ],
      };
    }
    default:
      return state;
  }
};

export default RoomsReducer;
