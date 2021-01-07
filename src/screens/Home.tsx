import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";

const Home = ({ navigation }) => {
  const { navigate } = useNavigation();

  function nestedNavigateToVeggies() {
    navigate("OutdoorPlantsStackNav", { screen: "Vegetables", initial: false });
  }

  return (
    <View style={styles.screen}>
      <View>
        <Button style={styles.button} onPress={nestedNavigateToVeggies}>
          Nested navigate to Veggies
        </Button>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginVertical: 3,
    paddingVertical: 5,
    backgroundColor: "salmon",
  },
});
