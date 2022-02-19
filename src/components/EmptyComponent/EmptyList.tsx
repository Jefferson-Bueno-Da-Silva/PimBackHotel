import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { EmptyListContainer, EmptyListText } from './styles';

export type EmptyListProps = {
    title: string;
};

const EmptyListComponent: React.FC<EmptyListProps> = ({ title }) => {
    return (
        <EmptyListContainer>
            <MaterialIcons
                name='search-off'
                size={50}
                color='black'
            />
            <EmptyListText>{title}</EmptyListText>
        </EmptyListContainer>
    );
};

export default EmptyListComponent;
