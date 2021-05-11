import React from "react";
import { StyleSheet, Text, View,Button } from "react-native";

const CategoriesScreen = (props) => {
  {console.log(props)}
  return (
    <View style={styles.screen}>
      <Text>Categories Screen</Text>
      <Button title="go to menu" onPress={()=> {
        props.navigation.navigate({routeName : "CategoryMenu"});
      }}/>
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
