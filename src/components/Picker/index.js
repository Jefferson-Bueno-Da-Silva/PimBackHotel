import React, { useCallback, useEffect, useState } from "react";
import { Text, View } from "react-native";

import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import Line from "../Line";

const Picker = ({ Occupation }) => {
  const [open, setOpen] = useState(false);
  const [textShow, setTextShow] = useState('Pessoa')
  const [value, setValue] = useState(1);

  useEffect(() => {
    if(value === 1){
      setTextShow('Pessoa')
    }else{
      setTextShow('Pessoas')
    }
  }, [value])

  const itemClick = useCallback(
    (item) => {
      setValue(item);
      setOpen(false);
      console.log(item);
    },
    [value]
  );

  const toggleModal = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <View style={styles.container}>
      {/* botão fica sempre visivel */}
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={toggleModal}
      >
        <View style={styles.iconContainer}>
          <Ionicons name="person" size={16} color="black" />
          <Text style={styles.textButton}>{value} {textShow}</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
      </TouchableOpacity>
      {open && (
        <ScrollView style={styles.dropDownContainer}>
          <ListItemContainer Occupation={Occupation} onPress={itemClick}/>
        </ScrollView>
      )}
    </View>
  );
};
const ListItemContainer = ({ Occupation, onPress }) => {
  let itemList = [];
  for (let i = 1; i <= Occupation; i++) {
    itemList.push(
      <TouchableOpacity
        style={styles.iconContainer}
        activeOpacity={0.7}
        onPress={() => onPress(i)}
        key={i}
      >
        <Ionicons name="people" size={16} color="black" />
        <Text style={styles.textButton}>{i} { i === 1 ? "Pessoa" : "Pessoas"}</Text>
      </TouchableOpacity>
    );
  }
  return itemList;
};

export default Picker;
