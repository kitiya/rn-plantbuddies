import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { defaultNavScreenOptions } from "./navigationUtils";
import Settings from "../screens/Settings";

const Stack = createStackNavigator();

const SettingsStackNav = () => {
  return (
    <Stack.Navigator screenOptions={defaultNavScreenOptions}>
      <Stack.Screen
        name={"Settings"}
        component={Settings}
        options={{ headerTitle: "Setting" }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default SettingsStackNav;
