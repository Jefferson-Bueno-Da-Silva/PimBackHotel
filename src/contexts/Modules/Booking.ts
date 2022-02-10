import React, { useMemo } from 'react';
import { Alert } from 'react-native';
import { IBooking } from '../../interfaces';
import {
    bodyReserves,
    BookingResponse,
    getAll,
    params,
    create,
    bodyCheckin,
    checkin,
    createResponse,
} from '../../services/api/reserves';
import { BookingActions, BookingState } from '../reducers/BookingReducer';

export default class Booking implements IBooking {
    constructor(private state: BookingState, private dispatch: React.Dispatch<BookingActions>) {}

    async getAll(params: params): Promise<BookingResponse[]> {
        try {
            const response = await getAll(params);
            this.updateBookingsData(response.data);
            return response.data;
        } catch (e) {
            console.error(e);
            return null;
        }
    }

    async create(body: bodyReserves): Promise<createResponse> {
        try {
            const response = await create(body);
            return response.data;
        } catch (e) {
            console.error(e);
            Alert.alert('Erro', 'Ocorreu um erro inesperado, tente novamente mais tarde');
            return null;
        }
    }

    async checkin(id: number, body: bodyCheckin): Promise<bodyCheckin> {
        try {
            const response = await checkin(id, body);
            return response.data;
        } catch (e) {
            console.error(e.message);
            Alert.alert('Erro', 'Ocorreu um erro inesperado, tente novamente mais tarde');
            return e;
        }
    }

    // // Get's
    public get getIdSelected(): number {
        return this.state.idSelected;
    }

    public get getRooms(): BookingResponse[] {
        return this.state.rooms;
    }

    // // Set's
    updateBookingsData(rooms: BookingResponse[]): void {
        this.dispatch({
            type: 'updateBookingsData',
            payload: {
                rooms,
            },
        });
    }
    setIdSelected(id: number): void {
        this.dispatch({
            type: 'setIdSelected',
            payload: {
                idSelected: id,
            },
        });
    }
}
