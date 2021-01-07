import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../screens/Home";

import OutdoorPlantsStackNav from "./OutdoorPlantsStackNav";
import IndoorPlantsStackNav from "./IndoorPlantsStackNav";
import SettingsStackNav from "./SettingsStackNav";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();

const TabBarIcon = ({ name, iconColor }) => {
  return <MaterialCommunityIcons name={name} size={26} color={iconColor} />;
};

function getScreenConfig({ routeName }) {
  switch (routeName) {
    case "Home":
      return { iconName: "home", label: "Home" };

    case "IndoorPlantsStackNav":
      return { iconName: "sprout", label: "Indoor" };

    case "OutdoorPlantsStackNav":
      return { iconName: "pine-tree", label: "Outdoor" };

    case "SettingsStackNav":
      return { iconName: "settings", label: "Settings" };
  }
}

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        // shifting={false}
        // labeled={true}
        activeColor="white"
        inactiveColor="#7fbfbf"
        barStyle={{ backgroundColor: "teal" }}
        screenOptions={({ route }) => {
          const routeName = route.name;
          const { iconName, label } = getScreenConfig({ routeName });
          return {
            tabBarIcon: ({ color }) => {
              return <TabBarIcon name={iconName} iconColor={color} />;
            },
            tabBarLabel: label,
          };
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
          }}
        />
        <Tab.Screen
          name="IndoorPlantsStackNav"
          component={IndoorPlantsStackNav}
          options={{
            tabBarLabel: "Indoor",
          }}
        />
        <Tab.Screen
          name="OutdoorPlantsStackNav"
          component={OutdoorPlantsStackNav}
          options={{
            tabBarLabel: "Outdoor",
          }}
        />
        <Tab.Screen
          name="SettingsStackNav"
          component={SettingsStackNav}
          options={{
            tabBarLabel: "Settings",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
