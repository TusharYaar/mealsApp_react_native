import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableHighlight,
} from "react-native";

const MealItem = (props) => {
  return (
    <View style={styles.item}>
      <TouchableHighlight onPress={props.onPress}>
        <View>
          <View style={styles.mealHeader}>
            <ImageBackground
              source={{ uri: props.imageUrl }}
              style={styles.bgImage}
            >
              <View style={styles.titleContainer}>
              <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
</View>
            </ImageBackground>
          </View>
          <View style={styles.mealDetail}>
            <Text>{props.duration} mins</Text>
            <Text>{props.complexity}</Text>
            <Text>{props.affordability} </Text>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    height: 200,
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 2,
    marginVertical: 15,
    marginHorizontal: 10,
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  mealHeader: {
    height: "88%",
  },
  mealDetail: {
    height: "12%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
      fontSize: 20,
      color: "white",
  },
  titleContainer: {
      paddingVertical: 5,
      paddingHorizontal: 10,
      backgroundColor: "rgba(0,0,0,0.5)",

  }
});
