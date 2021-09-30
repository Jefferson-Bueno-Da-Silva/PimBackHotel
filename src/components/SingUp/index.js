import React, { useState } from "react";
import { Text, View } from "react-native";
import TabNavigationModal from "../TabNavigationModal";

import Login from "../../screens/Login";

import { styles } from "./styles.js";
import { fonts } from "../../styles/fonts";

const SingUp = () => {
  const [active, setActive] = useState(false);

  return (
    <View style={styles.container}>
      <TabNavigationModal active={active} setActive={setActive} />
      <View style={styles.body}>
        {active ? <Text style={[fonts.mediumSemiBold]}>teste</Text> : <Login />}
      </View>
    </View>
  );
};

export default SingUp;
