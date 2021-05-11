import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from "./Navigation/MealsNavigation"
import { enableScreens  } from 'react-native-screens';

//use native navigation
enableScreens();


export default function App() {
  return (
 <AppNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
