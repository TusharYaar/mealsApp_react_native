import React from "react";
import {
  StyleSheet,
  FlatList,
} from "react-native";
import { CATEGORIES } from "../Data/DummyData";
import {Colors} from "../Constants/Colors";
import CategoryGridItem from "../Components/CategoryGridItem";

const CategoriesScreen = (props) => {
  const renderGridItem = ({ item }) => {
    return (
      <CategoryGridItem
        title={item.name}
        color={item.color}
        onSelect={() => props.navigation.navigate("CategoryMenu", { ...item })}
      />
    );
  };

  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
CategoriesScreen.navigationOptions ={
    headerStyle: {
      backgroundColor: Colors.primary,
    }
  }

export default CategoriesScreen;
