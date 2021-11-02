import React, { useMemo } from "react";
import { BookingResponse, getAll, params } from "../services/api/reserves";
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
    }).catch(e => console.debug(e))
  };

  getState = useMemo(() => this.state, [this])

  setIdSelected = (id: number) => {
    this.dispatch({
      type: 'setIdSelected',
      payload: {
        idSelected: id,
      },
    });
  }

  getIdSelected = useMemo(() => this.state.idSelected, [this])

  async updateBookingsData(rooms: BookingResponse[]) {
    this.dispatch({
      type: 'updateBookingsData',
      payload: {
        rooms,
      },
    });
  }
}
