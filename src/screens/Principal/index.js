import React, { useRef, useState, useCallback } from "react";
import { Image, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Modalize } from "react-native-modalize";

import { styles } from "./styles.js";

import { logo } from "../../assets";
import { fonts } from "../../styles/fonts/index.js";
import { LargeButton, DragDropModal } from "../../components";

const Principal = () => {
  /**
   * @type {MutableRefObject<Modalize>}
   */
  const modalizeRef = useRef(null);
  const [InitialRouteName, setInitialRouteName] = useState("");

  const handleLogin = useCallback(
    () => {
      modalizeRef.current?.open();
      setInitialRouteName("Login");
    },
    [modalizeRef]
  );

  const handleRegister = useCallback(
    () => {
      modalizeRef.current?.open();
      setInitialRouteName("Register");
    },
    [modalizeRef]
  );
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
        <LargeButton buttonText="Criar conta" onPress={handleRegister} />
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
      <DragDropModal ref={modalizeRef} routeName={InitialRouteName} />
    </View>
  );
};

export default Principal;
