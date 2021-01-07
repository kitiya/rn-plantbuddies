import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const OutdoorPlants = () => {
  const { navigate } = useNavigation();

  // const gotoOutdoorPlants = () => navigate("OutdoorPlants");
  const gotoEvergreen = () => navigate("Evergreen");
  const gotoShrubs = () => navigate("Shrubs");
  const gotoCutFLowers = () => navigate("CutFlowers");
  const gotoVegetables = () => navigate("Vegetables");
  return (
    <View style={styles.screen}>
      {/* <Button onPress={gotoOutdoorPlants}>Outdoor Plants</Button> */}
      <Button style={styles.button} mode="contained" onPress={gotoEvergreen}>
        Evergreen
      </Button>
      <Button style={styles.button} mode="contained" onPress={gotoShrubs}>
        Shrubs
      </Button>
      <Button style={styles.button} mode="contained" onPress={gotoCutFLowers}>
        Cut FLowers
      </Button>
      <Button style={styles.button} mode="contained" onPress={gotoVegetables}>
        Vegetables
      </Button>
    </View>
  );
};

export default OutdoorPlants;

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
