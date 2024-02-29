import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { setBusState } from "../slices/busStateSlice";

export default function BusButton({ color, fareMultiplier, index }) {
  const dispatch = useDispatch();
  const indexFromRedux = useSelector((state) => state.busState.value.index);
  return (
    <View>
      <Pressable
        style={[
          styles.button,
          {
            backgroundColor: color,
            borderColor: indexFromRedux == index ? "white" : color,
          },
        ]}
        onPress={() => {
          dispatch(setBusState({color, fareMultiplier, index}))
        }}
      >
        <FontAwesome5 name="bus" size={30} color="white" />
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
    borderWidth: 4,
    margin: 10,
    elevation: 3,
  },
});
