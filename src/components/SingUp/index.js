import React, { useCallback, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { fonts } from "../../styles/fonts/index.js";
import TabNavigationModal from "../TabNavigationModal";

import { styles } from "./styles.js";

const SingUp = () => {
  const [active, setActive] = useState(false);

  return (
    <View style={styles.container}>
      <TabNavigationModal active={active} setActive={setActive} />
      <View style={styles.body}>
        <Text style={[fonts.mediumSemiBold]}>Email</Text>
      </View>
    </View>
  );
};

export default SingUp;
