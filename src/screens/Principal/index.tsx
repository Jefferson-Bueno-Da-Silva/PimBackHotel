import React, { useCallback, useRef, useState } from 'react';
import { Image, Text, View } from 'react-native';

import {
    Container,
    ImageContainer,
    TextContainer,
    Title,
    SubTitle,
    ButtonsContainer,
    TermsContainer,
    TermsText,
    TermsTextLink,
} from './styles';

import { logo } from '../../assets';
import { fonts } from '../../styles/fonts';
import { DragDropModal, LargeButton, SingUp } from '../../components';
import { IHandles } from 'react-native-modalize/lib/options';

const Principal = () => {
    const modalizeRef = useRef<IHandles>(null);
    const [route, setRoute] = useState('');

    const handleLogin = useCallback(() => {
        modalizeRef.current?.open();
    }, []);

    return (
        <Container>
            <ImageContainer>
                <Image source={logo} />
            </ImageContainer>

            <TextContainer>
                <Title>Bem Vindo</Title>
                <SubTitle>Faça o login ou crie sua conta</SubTitle>
            </TextContainer>

            <ButtonsContainer>
                <LargeButton
                    buttonText='Criar conta'
                    onPress={() => {
                        handleLogin();
                        setRoute('login');
                    }}
                />
                <LargeButton
                    buttonText='Login'
                    secondary
                    onPress={() => {
                        handleLogin();
                        setRoute('register');
                    }}
                />
            </ButtonsContainer>

            <TermsContainer>
                <TermsText>
                    Ao fazer o cadastro, você aceita os
                    <TermsTextLink> Termos e Condições </TermsTextLink>E
                    <TermsTextLink> Politica de Privacidade. </TermsTextLink>
                </TermsText>
            </TermsContainer>

            <DragDropModal ref={modalizeRef}>
                <SingUp routeName={route} />
            </DragDropModal>
        </Container>
    );
};

export default Principal;
