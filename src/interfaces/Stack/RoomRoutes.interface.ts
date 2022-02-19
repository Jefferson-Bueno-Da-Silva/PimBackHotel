import { RouteProp } from '@react-navigation/native';
import { RoomsResponse } from '../../services/api/rooms';
import { RootStackParamList } from './PrivateRoutes.interface';

export type RoomRoute = {
    route: RouteProp<RootStackParamList, 'Details'>;
};
