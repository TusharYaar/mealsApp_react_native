import React, { useState,useEffect, useCallback } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";
import { Colors } from "../Constants/Colors";
import { useDispatch } from "react-redux";

import {setFilters} from "../Store/Actions/meals";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../Components/CustomHeaderButton"

const FilterScreen = (props) => {
  const {navigation} = props;
  const [isGlutanFree, setGlutanFree] = useState(false);
  const [isVegan, setVegan] = useState(false);
  const [isVegetarian, setVegetarian] = useState(false);
  const [isLactosFree, setLactosFree] = useState(false);

  const dispatch = useDispatch();

  const saveFilter = useCallback(()=> {
    const filters = {
      glutanFree: isGlutanFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
      lactosFree: isLactosFree,
    }
    dispatch(setFilters(filters))
  },[isGlutanFree,isVegan,isVegetarian,isLactosFree,dispatch])

  useEffect(()=> {
    navigation.setParams({saveFilter: saveFilter})
  },[saveFilter])

  return (
    <View style={styles.screen}>
      <View style={styles.options}>
        <Text>Glutan Free</Text>
        <Switch
          trackColor={{ false: "#767577", true: Colors.primary }}
          thumbColor={Colors.secondary}
          onValueChange={(value) => {
            setGlutanFree(value);
          }}
          value={isGlutanFree}
        />
      </View>
      <View style={styles.options}>
        <Text>Vegan</Text>
        <Switch
          trackColor={{ false: "#767577", true: Colors.primary }}
          thumbColor={Colors.secondary}
          onValueChange={(value) => {
            setVegan(value);
          }}
          value={isVegan}
        />
      </View>
      <View style={styles.options}>
        <Text>Vegetarian</Text>
        <Switch
          trackColor={{ false: "#767577", true: Colors.primary }}
          thumbColor={Colors.secondary}
          onValueChange={(value) => {
            setVegetarian(value);
          }}
          value={isVegetarian}
        />
      </View>
      <View style={styles.options}>
        <Text>Lactos Free</Text>
        <Switch
          trackColor={{ false: "#767577", true: Colors.primary }}
          thumbColor={Colors.secondary}
          onValueChange={(value) => {
            setLactosFree(value);
          }}
          value={isLactosFree}
        />
      </View>
    </View>
  );
};

export default FilterScreen;

FilterScreen.navigationOptions = ({ navigation }) => {
  const saveFilter = navigation.getParam("saveFilter");
  return {
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Save" iconName="save-sharp" onPress={saveFilter} />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  options: {
    padding: 10,
    marginVertical: 10,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});
