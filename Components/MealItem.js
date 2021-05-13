import React from 'react'
import { StyleSheet, Text, View,ImageBackground,TouchableHighlight } from 'react-native'

const MealItem = (props) => {
    return (
        <View style={styles.item}>
            <TouchableHighlight onPress={props.onPress}>
                <ImageBackground source={{uri: props.imageUrl}} style={styles.bgImage} >
            <Text>{props.title}</Text>
                </ImageBackground>
            </TouchableHighlight>
        </View>
    )
}

export default MealItem



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
    bgImage: {width: "100%", height: "100%", borderRadius: 5, }
})


