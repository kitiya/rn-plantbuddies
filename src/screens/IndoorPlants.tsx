import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const IndoorPlants = () => {
  return (
    <View style={styles.screen}>
      <Image
        source={{
          uri:
            "https://media.architecturaldigest.com/photos/5dcde0245ff5e60008e76f52/master/w_1600%2Cc_limit/Osofsky_Oct19-571.jpg",
        }}
        style={styles.image}
      />
    </View>
  );
};

export default IndoorPlants;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  image: { width: "100%", height: 200 },
});
