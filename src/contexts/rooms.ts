import { signIn, register } from "../services/api/auth";
import { getAll, params, RoomsResponse } from "../services/api/rooms";
import {RoomsActions, RoomsState} from '../contexts/reducers/RoomsReducer';
import React from "react";

export default class Rooms {
  constructor(
    private state: RoomsState,
    private dispatch: React.Dispatch<RoomsActions>,
  ) {}
  
  getAll = (
    params: params,
    concatItem: RoomsResponse[] = []
  ) => {
    return new Promise((resolve, reject) => {
      getAll(params).then(response => {
        this.updateRoomsData(response)
        response = concatItem.concat(response)
        resolve(response);
      }).catch(err => reject(err))
    })
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
