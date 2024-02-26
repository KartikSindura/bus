import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import BusButton from "../components/BusButton";

export default function Createbus() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const onModalClose = () => {
    setIsModalVisible(false);
  }
  const onCreate = () => {

  }
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <BusButton color="#F28627" />
        <BusButton color="#219653" />
        <BusButton color="#D63A3A" />
        <BusButton color="#2E81EB" />
        <BusButton color="#1BBABF" />
      </View>
      <View>
        
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    marginTop: 20,
    flexDirection: "row",
  },
});
