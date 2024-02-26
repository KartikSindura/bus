import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { setFareMultiplier } from "../slices/fareSlice";

export default function BusButton({ color, fareMultiplier }) {
  const fare = useSelector((state) => state.fare.value);
  const dispatch = useDispatch();

  return (
    <View>
      <Pressable
        style={[styles.button, { backgroundColor: color, borderColor: color }]}
        onPress={() => {
          dispatch(setFareMultiplier(fareMultiplier));
        }}
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
    borderWidth: 3,
    backgroundColor: "#D10000",
    margin: 10,
  },
});
