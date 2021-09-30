import React, { forwardRef, useRef } from "react";
import { View, Text } from "react-native";
import { Modalize } from "react-native-modalize";
import SingUp from "../SingUp";
import { primary } from "../../styles/colors";

const DragDropModal = forwardRef(({ routeName }, ref) => {
  return (
    <Modalize
      handleStyle={{ backgroundColor: primary.borderColor }}
      snapPoint={500}
      handlePosition="inside"
      childrenStyle={{
        paddingTop: 32
      }}
      ref={ref}
    >
      <SingUp />
    </Modalize>
  );
});

export default DragDropModal;
