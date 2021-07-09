import React, {useCallback, useEffect} from "react";
import { StyleSheet, Text, View, Image,ScrollView } from "react-native";
import {useSelector,useDispatch} from "react-redux";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../Components/CustomHeaderButton"

import {toggleFavorite} from "../Store/Actions/meals";
const ListItem =  (props) => {
  return (
    <View>
    <Text>{props.children}</Text>
    </View>
  )
}

const MenuDetailScreen = (props) => {
  const {navigation} = props;
  const meals = useSelector(state => state.meals.meals);
  const mealId = navigation.getParam("id");
  const meal = meals.find((meal) => meal.id === mealId);
  const isFav = useSelector(state => state.meals.favoriteMeals.some(meal => meal.id === mealId));
  const dispatch = useDispatch();
  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch,mealId]);

  useEffect(()=> {
    navigation.setParams({toggleFav: toggleFavoriteHandler})
  },[toggleFavoriteHandler]);

  useEffect(()=>{
    navigation.setParams({isFav: isFav});
  },[isFav])
  return (
<ScrollView>
  <Image source={{uri: meal.imageUrl}} style={styles.image}/>
    <View style={styles.container}>
      <Text style={styles.title}>{meal.title}</Text>
      <View>
        <Text style={styles.header}>Ingredients</Text>
        {meal.Ingredients.map((ing,index) => <ListItem key={index}>{ing}</ListItem>)}
      </View>
      <View>
        <Text style={styles.header}>Steps</Text>
        {meal.steps.map((stp,index) => <ListItem key={`step-${index}`}>{stp}</ListItem>)}
      </View>
    </View>
    
</ScrollView>
  );
};

MenuDetailScreen.navigationOptions = ({ navigation }) => {
  const toggleFav = navigation.getParam("toggleFav");
  const isFav = navigation.getParam("isFav");
  return {
    title: navigation.getParam("title"),
    headerStyle: {
      backgroundColor: navigation.getParam("categoryColor"),
    },
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Fav" iconName={isFav ? "ios-star": "ios-star-outline"} onPress={toggleFav} />
      </HeaderButtons>
    ),
  };
};

export default MenuDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
  },
  title: {
    fontSize: 24,
    fontFamily: "Inter_900Black",
  },
  header: {
    fontSize: 20,
    fontFamily: "Inter_900Black",
    marginVertical: 10,
  },
  container: {
    padding: 5,
  }
});
