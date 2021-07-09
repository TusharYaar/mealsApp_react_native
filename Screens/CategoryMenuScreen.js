import React from "react";
import { StyleSheet, View } from "react-native";
import {useSelector} from "react-redux";

import MealList from "../Components/MealList";


const CategoryMenuScreen = (props) => {
  const avaliableMeals = useSelector(state => state.meals.filteredMeals);
  const categoryId = props.navigation.getParam("id")
  
  const meals = avaliableMeals.filter((meal) => meal.categoryIds.includes(categoryId));
  return (
    <View style={styles.screen}>
      <MealList data={meals} navigation={props.navigation}/>
    </View>
  );
};

CategoryMenuScreen.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.getParam("name"),
    headerStyle: {
      backgroundColor: navigation.getParam("color"),
    },
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default CategoryMenuScreen;
