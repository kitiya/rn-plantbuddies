import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from "react-native-paper";

const Settings = ({ navigation, route }) => {
  const { name, price } = route.params;

  function goBack() {
    navigation.goBack();
  }
  return (
    <View style={styles.screen}>
      <Text>{`Name: ${name}, price: ${price}`}</Text>
      <Button style={styles.button} mode="contained" onPress={goBack}>
        Back
      </Button>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  button: {
    marginVertical: 3,
    paddingVertical: 5,
    backgroundColor: "salmon",
  },
});
