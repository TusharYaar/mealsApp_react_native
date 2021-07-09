import React, { useState } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";
import { Colors } from "../Constants/Colors";
const FilterScreen = () => {
  const [isGlutanFree, setGlutanFree] = useState(false);
  const [isVegan, setVegan] = useState(false);
  const [isVegetarian, setVegetarian] = useState(false);
  const [isLactosFree, setLactosFree] = useState(false);

  return (
    <View style={styles.screen}>
      <View style={styles.options}>
        <Text>Glutan Free</Text>
        <Switch
          trackColor={{ false: "#767577", true: Colors.primary }}
          thumbColor={Colors.secondary}
          onValueChange={(value) => {
            setGlutanFree(value);
          }}
          value={isGlutanFree}
        />
      </View>
      <View style={styles.options}>
        <Text>Vegan</Text>
        <Switch
          trackColor={{ false: "#767577", true: Colors.primary }}
          thumbColor={Colors.secondary}
          onValueChange={(value) => {
            setVegan(value);
          }}
          value={isVegan}
        />
      </View>
      <View style={styles.options}>
        <Text>Vegetarian</Text>
        <Switch
          trackColor={{ false: "#767577", true: Colors.primary }}
          thumbColor={Colors.secondary}
          onValueChange={(value) => {
            setVegetarian(value);
          }}
          value={isVegetarian}
        />
      </View>
      <View style={styles.options}>
        <Text>Lactos Free</Text>
        <Switch
          trackColor={{ false: "#767577", true: Colors.primary }}
          thumbColor={Colors.secondary}
          onValueChange={(value) => {
            setLactosFree(value);
          }}
          value={isLactosFree}
        />
      </View>
    </View>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  options: {
    padding: 10,
    marginVertical: 10,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});
