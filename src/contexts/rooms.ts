import { signIn, register } from "../services/api/auth";
import { getAll, params, RoomsResponse } from "../services/api/rooms";
import {DEFAULT_ROOMS_STATE, RoomsActions, RoomsState} from '../contexts/reducers/RoomsReducer';
import React, { useMemo } from "react";

export default class Rooms {
  constructor(
    private state: RoomsState,
    private dispatch: React.Dispatch<RoomsActions>,
  ) {}
  
  getAll = async (
    params: params,
    concatItem: RoomsResponse[] = []
  ) =>  {
    return await getAll(params).then( async response => {
      await this.updateRoomsData(response.data)
      return response.data
    }).catch(e => console.debug(e))
  };

  getState = useMemo(() => this.state, [this])

  async updateRoomsData(rooms: RoomsResponse[]) {
    this.dispatch({
      type: 'updateRoomsData',
      payload: {
        rooms,
      },
    });
  }
}
