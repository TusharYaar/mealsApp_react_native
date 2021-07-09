import React from "react";
import { StyleSheet, View } from "react-native";
import MealList from "../Components/MealList"
import {useSelector} from "react-redux";

const FavoritesScreen = (props) => {
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);
  return (
    <View style={styles.screen}>
    <MealList data={favoriteMeals} navigation={props.navigation}/>
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
