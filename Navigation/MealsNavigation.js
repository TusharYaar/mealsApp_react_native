import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator = createStackNavigator({
    Categories: {
      screen: CategoriesScreen,
    },
    CategoryMenu: {
        screen: CaategoryMenuScreen,
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