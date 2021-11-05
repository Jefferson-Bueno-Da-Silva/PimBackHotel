import React, { useMemo } from "react";
import { Alert } from "react-native";
import { bodyReserves, BookingResponse, getAll, params, create, bodyCheckin, checkin } from "../services/api/reserves";
import { BookingActions, BookingState } from "./reducers/BookingReducer";

export default class Booking {
  constructor(
    private state: BookingState,
    private dispatch: React.Dispatch<BookingActions>,
  ) {}
  
  getAll = async (
    params: params,
  ) =>  {
    return await getAll(params).then( async response => {
      await this.updateBookingsData(response.data)
      return response.data
    }).catch(e => console.error(e))
  };

  create = async (
    body: bodyReserves
  ) => {
    return await create(body).then(response => {
      return response
    }).catch(e => {
      console.error(e); 
      Alert.alert('Erro', 'Ocorreu um erro inesperado, tente novamente mais tarde');
      return e
    })
  }

  checkin = async (
    id: number,
    body: bodyCheckin
  ) => {
    return await checkin(id, body).then(response => {
      return response
    }).catch(e => {
      console.error(e.message); 
      Alert.alert('Erro', 'Ocorreu um erro inesperado, tente novamente mais tarde');
      return e
    })
  }

  // Get's
  getIdSelected = useMemo(() => this.state.idSelected, [this])
  getRooms = useMemo(() => this.state.rooms, [this])

  // Set's
  async updateBookingsData(rooms: BookingResponse[]) {
    this.dispatch({
      type: 'updateBookingsData',
      payload: {
        rooms,
      },
    });
  }

  setIdSelected = (id: number) => {
    this.dispatch({
      type: 'setIdSelected',
      payload: {
        idSelected: id,
      },
    });
  }
}
