import { getAll, params, RoomsResponse } from '../../services/api/rooms';
import { RoomsActions, RoomsState } from '../reducers/RoomsReducer';
import React, { useMemo } from 'react';

export default class Rooms {
    constructor(private state: RoomsState, private dispatch: React.Dispatch<RoomsActions>) {}

    getAll = async (params: params, concatItem: RoomsResponse[] = []) => {
        return await getAll(params)
            .then(async (response) => {
                await this.updateRoomsData(response.data);
                return response.data;
            })
            .catch((e) => console.error(e));
    };

    getRooms = useMemo(() => this.state.rooms, [this]);

    async updateRoomsData(rooms: RoomsResponse[]) {
        this.dispatch({
            type: 'updateRoomsData',
            payload: {
                rooms,
            },
        });
    }
}
