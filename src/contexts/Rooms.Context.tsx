import React, { createContext, useMemo, useReducer } from 'react';

import { IRoomsContext } from '../interfaces';
import Rooms from './Modules/rooms';
import RoomsReducer, { DEFAULT_ROOMS_STATE } from './reducers/RoomsReducer';

const RoomsContext = createContext<IRoomsContext>({} as IRoomsContext);

export const RoomsProvider: React.FC = ({ children }) => {
    const [roomsState, roomsDispatch] = useReducer(RoomsReducer, DEFAULT_ROOMS_STATE);
    const rooms = useMemo(() => new Rooms(roomsState, roomsDispatch), [roomsState]);

    return <RoomsContext.Provider value={{ rooms }}>{children}</RoomsContext.Provider>;
};

export default RoomsContext;
