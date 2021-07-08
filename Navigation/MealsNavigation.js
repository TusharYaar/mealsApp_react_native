import React from 'react';
import {Platform} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

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
const FavNavigator = createStackNavigator({
  Favorites: {
    screen: FavoritesScreen,
    title: "Categories",
  },
  MenuDetail: {
    screen: MenuDetailScreen,
  },
});
const tabsConfig= {
  Meals: {screen: AppNavigator, navigationOptions: {
    tabBarIcon: (tabInfo) => <Ionicons  name="ios-restaurant" size={24} color={tabInfo.tintColor}/>
  } },
  Favorites: {screen: FavNavigator,navigationOptions: {
    tabBarIcon: (tabInfo) => <Ionicons  name="ios-star" size={24} color={tabInfo.tintColor}/>
  } },
  Filters:  {screen: FilterScreen,navigationOptions: {
    tabBarIcon: (tabInfo) => <Ionicons  name="ios-filter" size={24} color={tabInfo.tintColor}/>
  } },
}

const MealFavTabNavigator = Platform.OS === "android" ?  createMaterialBottomTabNavigator(tabsConfig,{shifting: true}) : createBottomTabNavigator(tabsConfig);

export default createAppContainer(MealFavTabNavigator);
