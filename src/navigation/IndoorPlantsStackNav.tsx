import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { defaultNavScreenOptions } from "./navigationUtils";
import IndoorPlants from "../screens/IndoorPlants";

const Stack = createStackNavigator();

const IndoorPlantsStackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={defaultNavScreenOptions}
      initialRouteName="OutdoorPlants"
    >
      <Stack.Screen
        name={"IndoorPlants"}
        component={IndoorPlants}
        options={{ headerTitle: "Indoor Plants" }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default IndoorPlantsStackNav;
