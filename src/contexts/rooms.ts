import { signIn, register } from "../services/api/auth";
import { getAll, params, RoomsResponse } from "../services/api/rooms";
import {RoomsActions, RoomsState} from '../contexts/reducers/RoomsReducer';
import React from "react";

export default class Rooms {
  constructor(
    private state: RoomsState,
    private dispatch: React.Dispatch<RoomsActions>,
  ) {}
  
  getAll = async (
    params: params,
    concatItem: RoomsResponse[] = []
  ) =>  {
    return await getAll(params).then(response => {
      this.updateRoomsData(response.data)
      response.data = concatItem.concat(response.data)
      return response.data
    }).catch(e => console.debug(e))
  };

  async updateRoomsData(rooms: RoomsResponse[]) {
    this.dispatch({
      type: 'updateRoomsData',
      payload: {
        rooms,
      },
    });
  }
}
