import React, { useCallback } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import { Entypo } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

import { Button, ButtonText, Container, FooterContainer, Location, LocationContainer, Template, Title } from './styles';
import { primary } from '../../styles/colors';
import { formatDate } from '../../utils/formatDate';
import { RoomsResponse } from '../../services/api/rooms';
import { BookingResponse } from '../../services/api/reserves';
import { shadow } from '../../styles/shadow';

export type ListViewProps = {
    room: RoomsResponse;
    booking?: BookingResponse;
    onPress(): void;
};

const ListView: React.FC<ListViewProps> = ({ room, booking, onPress }) => {
    const { image, description, roomCategory } = room;

    return (
        <Container style={shadow.shadow8}>
            <Template source={{ uri: image }} />

            <View>
                <Title>{description}</Title>

                <FooterContainer>
                    <LocationContainer>
                        {!!booking && (
                            <View style={{ flex: 1 }}>
                                <LocationContainer>
                                    <Octicons name='sign-in' size={18} color='black' style={{ marginRight: 8 }} />
                                    <Location>{formatDate(booking.data_entrada)}</Location>
                                </LocationContainer>

                                <LocationContainer>
                                    <Octicons name='sign-out' size={18} color='black' style={{ marginRight: 8 }} />
                                    <Location>{formatDate(booking.data_saida)}</Location>
                                </LocationContainer>
                            </View>
                        )}

                        {!!roomCategory && (
                            <>
                                <Entypo name='location-pin' size={15} color={primary.ChineseBlack} />
                                <Location>{roomCategory.categoryName}</Location>
                            </>
                        )}
                    </LocationContainer>

                    <Button activeOpacity={0.5} onPress={onPress}>
                        <ButtonText>Visualizar</ButtonText>
                    </Button>
                </FooterContainer>
            </View>
        </Container>
    );
};

export default ListView;
