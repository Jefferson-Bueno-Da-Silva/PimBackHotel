import React, { useCallback, useRef } from "react";
import { Image, Text, View } from "react-native";

import { styles } from "./styles.js";

import { logo } from "../../assets";
import { fonts } from "../../styles/fonts/index.js";
import { DragDropModal, LargeButton } from "../../components";

const Principal = () => {
  const modalizeRef = useRef(null);

  const handleLogin = useCallback(() => {
    modalizeRef.current?.open();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={logo} />
      </View>

      <View style={styles.textContainer}>
        <Text style={[fonts.subTitleLarge, styles.title]}>Bem Vindo</Text>
        <Text style={[fonts.captionRegular, styles.subTitle]}>
          Faça o login ou crie sua conta
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <LargeButton buttonText="Criar conta" onPress={handleLogin} />
        <LargeButton buttonText="Login" secondary onPress={handleLogin} />
      </View>

      <View style={styles.termsContainer}>
        <Text style={[fonts.tiny, styles.termsText]}>
          Ao fazer o login ou cadastro, você aceita os
          <Text style={styles.termsTextLink}> Termos e {"\n"} Condições </Text>
          E
          <Text style={styles.termsTextLink}> Politica de Privacidade. </Text>
        </Text>
      </View>
      <DragDropModal ref={modalizeRef} />
    </View>
  );
};

export default Principal;
