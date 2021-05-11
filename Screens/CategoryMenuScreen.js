import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CategoryMenuScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>CategoryMenuScreen</Text>
    </View>
  );
};

export default CategoryMenuScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
