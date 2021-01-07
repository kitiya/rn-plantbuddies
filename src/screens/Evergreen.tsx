import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Evergreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Evergreen Screen</Text>
    </View>
  );
};

export default Evergreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
