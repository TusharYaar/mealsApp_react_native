import React from "react";
import { StyleSheet, View } from "react-native";
import MealList from "../Components/MealList"
import {MEAL} from "../Data/DummyData";


const FavoritesScreen = (props) => {
  const favMeal = MEAL.filter(meal=> ["m1","m2","m3"].includes(meal.id))

  return (
    <View style={styles.screen}>
    <MealList data={favMeal} navigation={props.navigation}/>
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
