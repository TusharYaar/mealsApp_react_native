import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { MEAL } from "../Data/DummyData";
import MealItem from "../Components/MealItem";
const getMeals = (id) => {
  var myMeal = MEAL.filter((meal) => meal.categoryIds.includes(id));
  return myMeal;
};

const CategoryMenuScreen = (props) => {
  const meals = getMeals(props.navigation.getParam("id"));
  const mealTile = ({ item }) => {
    return (
      <MealItem
        title={item.title}
        duration={item.duration}
        affordability={item.affordability}
        complexity={item.complexity}
        imageUrl={item.imageUrl}
        onPress={() => {
          props.navigation.navigate("MenuDetail", {
            categoryColor: props.navigation.getParam("color"),
            title: item.title,
            id: item.id,
          });
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList data={meals} renderItem={mealTile} style={{ width: "100%" }} />
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
