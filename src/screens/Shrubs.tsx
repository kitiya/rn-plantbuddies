import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Shrubs = () => {
  return (
    <View style={styles.screen}>
      <Text>Shrubs Screen</Text>
    </View>
  );
};

export default Shrubs;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
