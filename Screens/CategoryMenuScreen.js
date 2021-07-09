import React from "react";
import { StyleSheet, View } from "react-native";
import { MEAL } from "../Data/DummyData";
import MealList from "../Components/MealList";
const getMeals = (id) => {
  var myMeal = MEAL.filter((meal) => meal.categoryIds.includes(id));
  return myMeal;
};

const CategoryMenuScreen = (props) => {
  const meals = getMeals(props.navigation.getParam("id"));
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
