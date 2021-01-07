import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CutFlowers = () => {
  return (
    <View style={styles.screen}>
      <Text>Cut Flowers Screen</Text>
    </View>
  );
};

export default CutFlowers;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
