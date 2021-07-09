
import React from "react";
import AppNavigator from "./Navigation/MealsNavigation";
import { enableScreens } from "react-native-screens";
import AppLoading from "expo-app-loading";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import {Provider} from "react-redux";
import {createStore,combineReducers} from "redux";
import mealsReducer from "./Store/Reducers/meals";
//use native navigation
enableScreens();

const rootReducer = combineReducers({
  meals: mealsReducer
})
const store = createStore(rootReducer);

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });
  if (!fontsLoaded) return <AppLoading />;
  return <Provider store={store}><AppNavigator /></Provider>;
}
