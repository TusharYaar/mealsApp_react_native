import React from "react";
import { StyleSheet, Text, View, Image,ScrollView } from "react-native";
import { MEAL } from "../Data/DummyData";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../Components/CustomHeaderButton"
const getMeals = (id) => {
  var myMeal = MEAL.find((meal) => meal.id === id);
  return myMeal;
};

const ListItem =  (props) => {
  return (
    <View>
    <Text>{props.children}</Text>
    </View>
  )
}

const MenuDetailScreen = (props) => {
  const meal = getMeals(props.navigation.getParam("id"));
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
  return {
    title: navigation.getParam("title"),
    headerStyle: {
      backgroundColor: navigation.getParam("categoryColor"),
    },
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Fav" iconName="ios-star-outline" onPress={()=> console.log("Im favorite")} />
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
