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
  id: '0',
  imagePick: 'https://www2.camara.leg.br/atividade-legislativa/comissoes/comissoes-permanentes/cindra/imagens/sem.jpg.gif/image',
  RoomName: 'Sem Nome',
  location: 'Sem Localização',
  occupation: 1,
  time: 1,
  price: 0.0
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
      const idsToUpdate: string[] = [];
      rooms.forEach((room) => {
        const roomsInState = state.rooms.filter(
          (p) => p.id === room.id,
        );
        idsToUpdate.push(
          ...roomsInState.map((r) => {
            toUpdate.push({
              ...r,
            });
            return r.id;
          }),
        );
      });

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
