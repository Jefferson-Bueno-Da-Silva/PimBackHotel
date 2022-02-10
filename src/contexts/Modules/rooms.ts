import React, { useCallback, useMemo } from 'react';
import { IRooms } from '../../interfaces';
import { getAll, params, RoomsResponse } from '../../services/api/rooms';
import { RoomsActions, RoomsState } from '../reducers/RoomsReducer';

export default class Rooms implements IRooms {
    constructor(private state: RoomsState, private dispatch: React.Dispatch<RoomsActions>) {}

    async getAll(params?: params, concatItem?: RoomsResponse[]): Promise<RoomsResponse[]> {
        return getAll(params)
            .then(async (response) => {
                await this.updateRoomsData(response.data);
                return response.data;
            })
            .catch((e) => {
                console.error(e);
                return null;
            });
    }

    getRooms(): RoomsResponse[] {
        return this.state.rooms;
    }

    async updateRoomsData(rooms: RoomsResponse[]) {
        this.dispatch({
            type: 'updateRoomsData',
            payload: {
                rooms,
            },
        });
    }
}
