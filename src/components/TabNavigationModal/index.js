import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { fonts } from "../../styles/fonts/index.js";

import { styles } from "./styles.js";

const TabNavigationModal = ({ active = false, setActive }) => {
  return (
    <View style={styles.header}>
      {/* ativo quando verdadeiro */}
      <TouchableOpacity activeOpacity={0.7} onPress={() => setActive(true)}>
        <Text
          style={[
            fonts.captionSemiBold,
            active ? styles.active : styles.deactivate
          ]}
        >
          Criar Conta
        </Text>
      </TouchableOpacity>

      {/* ativo quando falso */}
      <TouchableOpacity activeOpacity={0.7} onPress={() => setActive(false)}>
        <Text
          style={[
            fonts.captionSemiBold,
            !active ? styles.active : styles.deactivate
          ]}
        >
          Entrar
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TabNavigationModal;
