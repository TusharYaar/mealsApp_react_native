import React from "react";
import { StyleSheet, Text, View,Button, FlatList, TouchableOpacity } from "react-native";
import { CATEGORIES } from "../Data/DummyData"


const CategoriesScreen = (props) => {

  const renderGridItem = ({item}) => {
    return (
    <TouchableOpacity style={styles.gridItem} onPress={()=> props.navigation.navigate("CategoryMenu",{...item})}>
      <View >
      <Text>{item.name}</Text>
    </View>
    </TouchableOpacity>
    )
  }
  
  

  
  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2}  />
  );
};




const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem : {
    margin: 10,
    padding: 10,
    flex: 1,
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 2
  }
});
export default CategoriesScreen;
