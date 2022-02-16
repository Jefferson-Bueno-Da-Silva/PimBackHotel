import React from 'react';
import { shadow } from '../../styles/shadow';

import { Container, styles, Title } from './styles';

const HeaderImage = ({ imageUri, title }) => {
    return (
        <Container source={{ uri: imageUri }} style={shadow.shadow5} imageStyle={styles.imageSource} resizeMode='cover'>
            <Title>{title}</Title>
        </Container>
    );
};

export default HeaderImage;
