import React, { forwardRef, useRef } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Modalize } from "react-native-modalize";
import TopTab from "../../routes/TopTab";
import { primary } from "../../styles/colors";

const DragDropModal = forwardRef(({ routeName }, ref) => {
  return (
    <Modalize
      handleStyle={{ backgroundColor: primary.borderColor }}
      snapPoint={300}
      handlePosition="inside"
      childrenStyle={{
        paddingTop: 32
      }}
      ref={ref}
    >
      <TopTab initialRoute={routeName} />
    </Modalize>
  );
});

export default DragDropModal;
