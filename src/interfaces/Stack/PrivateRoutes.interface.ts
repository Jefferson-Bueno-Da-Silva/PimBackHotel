import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RoomsResponse } from '../../services/api/rooms';

export type RootStackParamList = {
    Home: undefined;
    Details: RoomsResponse;
    Reserve: undefined;
    Finished: undefined;
    CodeScanner: undefined;
};

export type NavigationRouteStack = NativeStackScreenProps<RootStackParamList>['navigation'];
export type PrivateRouteStack = NativeStackScreenProps<RootStackParamList>['route'];
