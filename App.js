import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import AppNavigator from "./src/navigation/AppNavigator";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

export default function App() {
  return <AppNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
