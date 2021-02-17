import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function SecondScreen({}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 250,
      }}
    >
      <Text style={{ fontSize: 50 }}> SecondScreen</Text>
    </View>
  );
}
