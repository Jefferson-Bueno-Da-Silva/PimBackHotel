import React, { useState } from "react";
import { Text, View } from "react-native";
import TabNavigationModal from "../TabNavigationModal";

import Login from "../../screens/Login";
import Register from "../../screens/Register";

import { styles } from "./styles";
import { fonts } from "../../styles/fonts";

const SingUp = ({ routeName }) => {
  const [active, setActive] = useState(routeName === "login" ? true : false);

  return (
    <View style={styles.container}>
      <TabNavigationModal active={active} setActive={setActive} />
      <View style={styles.body}>{active ? <Register /> : <Login />}</View>
    </View>
  );
};

export default SingUp;
