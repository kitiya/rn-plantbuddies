import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

const Vegetables = ({ navigation }) => {
  const navigator = useNavigation();

  // function jumpToSettings() {
  //   // navigation.jumpTo("SettingsStackNav", { screen: "Settings" });
  // }

  function navigateToSettings() {
    navigator.navigate("SettingsStackNav", {
      screen: "Settings",
      params: { name: "Tomato", price: "$2.99" },
    });
  }

  function goBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.screen}>
      {/* <Button onPress={jumpToSettings}>Jump to settings</Button> */}
      <Button onPress={navigateToSettings}>Nested navigate to settings</Button>
      <Button onPress={goBack}>Go Back</Button>
    </View>
  );
};

export default Vegetables;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
