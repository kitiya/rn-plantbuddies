import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PlantCare = () => {
  return (
    <View style={styles.screen}>
      <Text>Plant Care Screen</Text>
    </View>
  );
};

export default PlantCare;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
