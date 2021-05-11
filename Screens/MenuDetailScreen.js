import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const MenuDetailScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>MenuDetailScreen</Text>
        </View>
    )
}

export default MenuDetailScreen

const styles = StyleSheet.create({    screen: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
}})
