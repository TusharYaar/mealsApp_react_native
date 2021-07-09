import React from "react";
import { FlatList } from "react-native";
import {useSelector} from "react-redux";

import MealItem from "./MealItem";
import { Colors } from "../Constants/Colors";
const MealList = (props) => {
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

  const mealTile = ({ item }) => {
    return (
      <MealItem
        title={item.title}
        isFav={favoriteMeals.some(meal => meal.id === item.id)}
        duration={item.duration}
        affordability={item.affordability}
        complexity={item.complexity}
        imageUrl={item.imageUrl}
        onPress={() => {
          props.navigation.navigate("MenuDetail", {
            categoryColor:
              props.navigation.getParam("color") || Colors.primary,
            title: item.title,
            id: item.id,
          });
        }}
      />
    );
  };
  return (
    <FlatList
      data={props.data}
      renderItem={mealTile}
      style={{ width: "100%" }}
    />
  );
};

export default MealList;
