import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import CategoriesScreen from "../Screens/CategoriesScreen";
import CategoryMenuScreen from "../Screens/CategoryMenuScreen";
import FavoritesScreen from "../Screens/FavoritesScreen";
import FilterScreen from "../Screens/FilterScreen";
import MenuDetailScreen from "../Screens/MenuDetailScreen";

const AppNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
    title: "Categories",
  },
  CategoryMenu: {
    screen: CategoryMenuScreen,
  },
  MenuDetail: {
    screen: MenuDetailScreen,
  },
});
const MealFavTabNavigator = createBottomTabNavigator({
  Meals: {screen: AppNavigator, navigationOptions: {
    tabBarIcon: (tabInfo) => <Ionicons  name="ios-restaurant" size={24} color={tabInfo.tintColor}/>
  } },
  Favorites: {screen: FavoritesScreen,navigationOptions: {
    tabBarIcon: (tabInfo) => <Ionicons  name="ios-star" size={24} color={tabInfo.tintColor}/>
  } },
  Filters:  {screen: FilterScreen,navigationOptions: {
    tabBarIcon: (tabInfo) => <Ionicons  name="ios-filter" size={24} color={tabInfo.tintColor}/>
  } },
})

export default createAppContainer(MealFavTabNavigator);
