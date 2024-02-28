import { View, Text } from "react-native";
import React from "react";

export default function MyText({ props }) {
  return (
    <View>
      <Text {...props} style={[{ fontFamily: "Helvetica" }, props.style]}>
        {props.children}
      </Text>
    </View>
  );
}
