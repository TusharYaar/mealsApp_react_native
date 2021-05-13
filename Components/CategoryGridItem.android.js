import React from 'react'
import { StyleSheet, Text, View,TouchableNativeFeedback,TouchableOpacity} from 'react-native'

const CategoryGridItem = (props) => {

    return (
        <View style={{...styles.item}}>
            <TouchableNativeFeedback onPress={props.onSelect} style={{flex: 1}}>
        <View style={{...styles.itemView,backgroundColor: props.color}} >
           <Text style={styles.itemText}>{props.title}</Text>
        </View>

           </TouchableNativeFeedback>
        </View>
    )
}

export default CategoryGridItem

const styles = StyleSheet.create({
    item : {
        margin: 10,
        flex: 1,
        borderRadius: 5,
        height: 100
      },
    itemView: {
        padding: 10,
        borderRadius: 5,
        overflow: "hidden",
        flex: 1,
        borderColor: "black",
        borderWidth: 2,
        justifyContent: "flex-end"
    },
    itemText: {
        fontSize: 20
    }
})
