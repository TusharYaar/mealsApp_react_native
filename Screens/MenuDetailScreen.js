import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const MenuDetailScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>MenuDetailScreen</Text>
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
