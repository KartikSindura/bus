import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

export default function BusButton({ color }) {
  return (
    <View>
      <Pressable
        style={[styles.button, { backgroundColor: color, borderColor: color }]}
      >
        <FontAwesome name="bus" size={30} color="white" />
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    height: 60,
    width: 60,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "red",
    borderWidth: 1,
    backgroundColor: "#D10000",
    margin: 10,
  },
});
