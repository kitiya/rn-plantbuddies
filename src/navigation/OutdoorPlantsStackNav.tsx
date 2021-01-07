import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { defaultNavScreenOptions } from "./navigationUtils";
import OutdoorPlants from "../screens/OutdoorPlants";
import Vegetables from "../screens/Vegetables";
import Shrubs from "../screens/Shrubs";
import Evergreen from "../screens/Evergreen";
import CutFlowers from "../screens/CutFlowers";

const Stack = createStackNavigator();

function getHeaderTitle(route) {
  const routeName = route.name;

  switch (routeName) {
    case "Evergreen":
      return "Evergreen";
    case "Shrubs":
      return "Shrubs";
    case "CutFlowers":
      return "Cut Flowers";
    case "Vegetables":
      return "Vegetables";
    default:
      return "Outdoor Plants";
  }
}

const OutdoorPlantsStackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={defaultNavScreenOptions}
      initialRouteName="OutdoorPlants"
    >
      <Stack.Screen
        name={"OutdoorPlants"}
        component={OutdoorPlants}
        options={({ route }) => ({
          headerTitle: getHeaderTitle(route),
        })}
      ></Stack.Screen>
      <Stack.Screen
        name="Evergreen"
        component={Evergreen}
        options={({ route }) => ({
          headerTitle: getHeaderTitle(route),
          headerTintColor: "white",
        })}
      ></Stack.Screen>
      <Stack.Screen
        name="Shrubs"
        component={Shrubs}
        options={({ route }) => ({
          headerTitle: getHeaderTitle(route),
          headerTintColor: "white",
        })}
      ></Stack.Screen>
      <Stack.Screen
        name="CutFlowers"
        component={CutFlowers}
        options={({ route }) => ({
          headerTitle: getHeaderTitle(route),
          headerTintColor: "white",
        })}
      ></Stack.Screen>
      <Stack.Screen
        name="Vegetables"
        component={Vegetables}
        options={({ route }) => ({
          headerTitle: getHeaderTitle(route),
          headerTintColor: "white",
        })}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default OutdoorPlantsStackNav;
