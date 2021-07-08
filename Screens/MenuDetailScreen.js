import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {MEAL} from "../Data/DummyData";





const getMeals = (id) => {
    var myMeal = MEAL.filter(meal => meal.id === id)
    return myMeal[0];
  }

const MenuDetailScreen = (props) => {
  const meal = getMeals(props.navigation.getParam("id"));
    return (
        <View style={styles.screen}>
            <Text>{meal.title}</Text>
        </View>
    )
}


MenuDetailScreen.navigationOptions = ({navigation}) => {
    return ({
      title: navigation.getParam('title'),
      headerStyle: {
        backgroundColor: navigation.getParam('categoryColor')
      }
    })
    };
    
    


export default MenuDetailScreen

const styles = StyleSheet.create({    screen: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
}})
