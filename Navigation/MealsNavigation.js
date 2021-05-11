import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import CategoriesScreen from "../Screens/CategoriesScreen";
import CategoryMenuScreen from "../Screens/CategoryMenuScreen";
import FavoritesScreen from "../Screens/FavoritesScreen";
import FilterScreen from "../Screens/FilterScreen";
import MenuDetailScreen from "../Screens/MenuDetailScreen"

const AppNavigator = createStackNavigator({
    Categories: {
      screen: CategoriesScreen,
    },
    CategoryMenu: {
        screen: CategoryMenuScreen,
    },
    Favorites: {
        screen: FavoritesScreen,
    },
    Filter: {
        screen: FilterScreen,
    },
    MenuDetail: {
        screen: MenuDetailScreen,
    }

  });
  
  export default createAppContainer(AppNavigator);